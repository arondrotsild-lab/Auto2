import { Router, type IRouter } from "express";
import formidable from "formidable";
import { readFileSync } from "node:fs";

const router: IRouter = Router();

router.post("/lead", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  if (!BOT_TOKEN || !CHAT_ID) {
    res.status(500).json({ error: "Bot not configured" });
    return;
  }

  const form = formidable({ maxFileSize: 20 * 1024 * 1024 });
  const [fields, files] = await form.parse(req);

  const name = fields.name?.[0] ?? "";
  const telegram = fields.telegram?.[0] ?? "";
  const message = fields.message?.[0] ?? "";
  const photo = files.photo?.[0];

  const text = [
    "🚗 *Новая заявка с сайта*",
    "",
    `👤 *Имя:* ${name}`,
    `📱 *Telegram:* ${telegram ? "@" + telegram.replace(/^@/, "") : "не указан"}`,
    `💬 *Запрос:*\n${message}`,
  ].join("\n");

  try {
    if (photo) {
      const buf = readFileSync(photo.filepath);
      const fd = new FormData();
      fd.append("chat_id", CHAT_ID);
      fd.append("caption", text);
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
            text,
            parse_mode: "Markdown",
          }),
        },
      );
      if (!r.ok) throw new Error(await r.text());
    }
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Telegram error");
    res.status(500).json({ error: String(err) });
  }
});

export default router;
