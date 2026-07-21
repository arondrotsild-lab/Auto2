import { Router } from "express";
import multer from "multer";

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

router.post("/lead", upload.single("photo"), async (req, res) => {
  const { name, telegram, message } = req.body as { name: string; telegram: string; message: string };
  const photo = req.file;

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    res.status(500).json({ error: "Bot not configured" });
    return;
  }

  const text = [
    "🚗 *Новая заявка с сайта*",
    "",
    `👤 *Имя:* ${name}`,
    `📱 *Telegram:* ${telegram ? "@" + telegram.replace(/^@/, "") : "не указан"}`,
    `💬 *Запрос:*\n${message}`,
  ].join("\n");

  try {
    if (photo) {
      const form = new FormData();
      form.append("chat_id", CHAT_ID);
      form.append("caption", text);
      form.append("parse_mode", "Markdown");
      const blob = new Blob([photo.buffer], { type: photo.mimetype });
      form.append("photo", blob, photo.originalname ?? "photo.jpg");

      const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
        method: "POST",
        body: form,
      });
      if (!tgRes.ok) throw new Error(await tgRes.text());
    } else {
      const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
      });
      if (!tgRes.ok) throw new Error(await tgRes.text());
    }

    res.json({ ok: true });
  } catch (err) {
    console.error("Telegram send error:", err);
    res.status(500).json({ error: String(err) });
  }
});

export default router;
