import { Router, type IRouter } from "express";
import formidable from "formidable";
import { readFileSync } from "node:fs";

const router: IRouter = Router();

const STARS = ["", "⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

router.post("/review", async (req, res) => {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  if (!BOT_TOKEN || !CHAT_ID) {
    res.status(500).json({ error: "Bot not configured" });
    return;
  }

  const form = formidable({ maxFileSize: 20 * 1024 * 1024 });
  const [fields, files] = await form.parse(req);

  const name = fields.name?.[0] ?? "Аноним";
  const service = fields.service?.[0] ?? "";
  const rating = Number(fields.rating?.[0] ?? 0);
  const text = fields.text?.[0] ?? "";
  const photo = files.photo?.[0];

  const stars = STARS[Math.min(Math.max(rating, 0), 5)] ?? "";

  const message = [
    `✍️ *Новый отзыв с сайта*`,
    ``,
    `👤 *Имя:* ${name}`,
    rating > 0 ? `${stars} *Оценка:* ${rating}/5` : null,
    service ? `🔧 *Услуга:* ${service}` : null,
    ``,
    `💬 *Отзыв:*\n${text}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    if (photo) {
      const buf = readFileSync(photo.filepath);
      const fd = new FormData();
      fd.append("chat_id", CHAT_ID);
      fd.append("caption", message);
      fd.append("parse_mode", "Markdown");
      fd.append(
        "photo",
        new Blob([buf], { type: photo.mimetype ?? "image/jpeg" }),
        photo.originalFilename ?? "photo.jpg",
      );
      const r = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
        { method: "POST", body: fd },
      );
      if (!r.ok) throw new Error(await r.text());
    } else {
      const r = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        },
      );
      if (!r.ok) throw new Error(await r.text());
    }
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Telegram review error");
    res.status(500).json({ error: String(err) });
  }
});

export default router;
