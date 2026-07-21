import { useRef, useState } from 'react';
import { ImagePlus, X, Send, CheckCircle } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const fileRef = useRef<HTMLInputElement>(null);

  function handlePhoto(file: File | null) {
    if (!file) return;
    setPhoto(file);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  function removePhoto() {
    setPhoto(null);
    setPreview(null);
    if (fileRef.current) fileRef.current.value = '';
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    const baseUrl = import.meta.env.BASE_URL?.replace(/\/$/, '') ?? '';
    const form = new FormData();
    form.append('name', name);
    form.append('telegram', telegram);
    form.append('message', message);
    if (photo) form.append('photo', photo);

    try {
      const res = await fetch(`${baseUrl}/api/lead`, { method: 'POST', body: form });
      if (!res.ok) throw new Error('server error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section id="order" className="section-pad bg-[#0a0a0a]">
        <div className="mx-auto max-w-[600px] px-4 text-center">
          <CheckCircle className="mx-auto mb-4 h-14 w-14 text-primary" />
          <h2 className="text-2xl font-medium">Заявка отправлена!</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Мы получили вашу заявку и свяжемся с вами в Telegram в ближайшее время.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="section-pad bg-[#0a0a0a]">
      <div className="mx-auto max-w-[640px] px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-primary/70">Персональная заявка</p>
          <h2 className="text-2xl font-bold md:text-3xl">
            Получите предложение{' '}
            <span className="gold-gradient-text">под ваш автомобиль</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Прикрепите фото авто — мы подберём услугу и цену точно под ваш случай
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Photo upload */}
          <div>
            {preview ? (
              <div className="relative overflow-hidden rounded-xl border border-border">
                <img src={preview} alt="Фото авто" className="max-h-56 w-full object-cover" />
                <button
                  type="button"
                  onClick={removePhoto}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-white/[0.02] py-10 transition hover:border-primary/50 hover:bg-white/[0.04]"
              >
                <ImagePlus className="h-8 w-8 text-foreground/30" />
                <span className="text-sm text-foreground/50">Прикрепить фото автомобиля</span>
                <span className="text-xs text-foreground/30">необязательно · jpg, png, heic до 20 МБ</span>
              </button>
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handlePhoto(e.target.files?.[0] ?? null)}
            />
          </div>

          {/* Name */}
          <input
            type="text"
            required
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
          />

          {/* Telegram */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">@</span>
            <input
              type="text"
              required
              placeholder="ваш_telegram"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value.replace(/^@/, ''))}
              className="w-full rounded-lg border border-border bg-white/[0.03] py-3 pl-8 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
          </div>

          {/* Request */}
          <textarea
            required
            rows={4}
            placeholder="Опишите, что хотите сделать с автомобилем..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none rounded-lg border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
          />

          {status === 'error' && (
            <p className="text-center text-sm text-red-400">Ошибка отправки. Попробуйте ещё раз.</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === 'sending' ? 'Отправляем...' : 'Отправить заявку'}
          </button>

          <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
            Осуществляя отправку, Вы соглашаетесь с{' '}
            <a href="/personal" className="underline hover:text-foreground">
              Политикой конфиденциальности
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
