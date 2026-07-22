import type { VercelRequest, VercelResponse } from '@vercel/node';
import formidable from 'formidable';
import { readFileSync } from 'node:fs';

export const config = {
  api: { bodyParser: false },
};

const STARS = ['', '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  if (!BOT_TOKEN || !CHAT_ID) return res.status(500).json({ error: 'Bot not configured' });

  const form = formidable({ maxFileSize: 20 * 1024 * 1024 });
  const [fields, files] = await form.parse(req);

  const name = fields.name?.[0] ?? 'Аноним';
  const service = fields.service?.[0] ?? '';
  const rating = Number(fields.rating?.[0] ?? 0);
  const text = fields.text?.[0] ?? '';
  const photo = files.photo?.[0];

  const stars = STARS[Math.min(Math.max(rating, 0), 5)] ?? '';

  const message = [
    `✍️ *Новый отзыв с сайта*`,
    ``,
    `👤 *Имя:* ${name}`,
    rating > 0 ? `${stars} *Оценка:* ${rating}/5` : null,
    service ? `🔧 *Услуга:* ${service}` : null,
    ``,
    `💬 *Отзыв:*\n${text}`,
  ].filter(Boolean).join('\n');

  try {
    if (photo) {
      const buf = readFileSync(photo.filepath);
      const fd = new FormData();
      fd.append('chat_id', CHAT_ID);
      fd.append('caption', message);
      fd.append('parse_mode', 'Markdown');
      fd.append('photo', new Blob([buf], { type: photo.mimetype ?? 'image/jpeg' }), photo.originalFilename ?? 'photo.jpg');
      const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, { method: 'POST', body: fd });
      if (!r.ok) throw new Error(await r.text());
    } else {
      const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: 'Markdown' }),
      });
      if (!r.ok) throw new Error(await r.text());
    }
    return res.json({ ok: true });
  } catch (err) {
    console.error('Telegram error:', err);
    return res.status(500).json({ error: String(err) });
  }
}
