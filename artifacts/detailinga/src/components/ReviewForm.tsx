import { useRef, useState } from 'react';
import { ImagePlus, X, Send, CheckCircle, Star } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ReviewForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [text, setText] = useState('');
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
    if (rating === 0) return;
    setStatus('sending');

    const baseUrl = import.meta.env.BASE_URL?.replace(/\/$/, '') ?? '';
    const form = new FormData();
    form.append('name', name);
    form.append('service', service);
    form.append('rating', String(rating));
    form.append('text', text);
    if (photo) form.append('photo', photo);

    try {
      const res = await fetch(`${baseUrl}/api/review`, { method: 'POST', body: form });
      if (!res.ok) throw new Error('server error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section id="review-form" className="section-pad bg-[#0d0d0d]">
        <div className="mx-auto max-w-[600px] px-4 text-center">
          <CheckCircle className="mx-auto mb-4 h-14 w-14 text-primary" />
          <h2 className="text-2xl font-medium">Спасибо за отзыв!</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Ваш отзыв получен. Мы ценим каждое мнение и стараемся становиться лучше.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="review-form" className="section-pad bg-[#0d0d0d]">
      <div className="mx-auto max-w-[640px] px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-primary/70">Ваш опыт важен</p>
          <h2 className="text-2xl font-bold md:text-3xl">
            Оставьте отзыв{' '}
            <span className="gold-gradient-text">о выполненных работах</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Расскажите, как прошло — это помогает нам расти и другим клиентам сделать выбор
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Star rating */}
          <div className="flex flex-col items-center gap-3 py-2">
            <p className="text-sm text-muted-foreground">Ваша оценка</p>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className="h-9 w-9 transition-colors"
                    fill={(hovered || rating) >= star ? 'hsl(var(--primary))' : 'transparent'}
                    stroke={(hovered || rating) >= star ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'}
                    strokeWidth={1.5}
                  />
                </button>
              ))}
            </div>
            {rating === 0 && (
              <p className="text-xs text-primary/60">Нажмите на звезду, чтобы поставить оценку</p>
            )}
            {rating > 0 && (
              <p className="text-xs text-primary/80">
                {['', 'Плохо', 'Не очень', 'Нормально', 'Хорошо', 'Отлично!'][rating]}
              </p>
            )}
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

          {/* Service */}
          <input
            type="text"
            placeholder="Какую услугу делали? (например: оклейка плёнкой, химчистка...)"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="rounded-lg border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
          />

          {/* Review text */}
          <textarea
            required
            rows={4}
            placeholder="Расскажите о своих впечатлениях..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="resize-none rounded-lg border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
          />

          {/* Photo upload */}
          <div>
            {preview ? (
              <div className="relative overflow-hidden rounded-xl border border-border">
                <img src={preview} alt="Фото работ" className="max-h-56 w-full object-cover" />
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
                className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-white/[0.02] py-8 transition hover:border-primary/50 hover:bg-white/[0.04]"
              >
                <ImagePlus className="h-7 w-7 text-foreground/30" />
                <span className="text-sm text-foreground/50">Прикрепить фото результата</span>
                <span className="text-xs text-foreground/30">необязательно · jpg, png до 20 МБ</span>
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

          {status === 'error' && (
            <p className="text-center text-sm text-red-400">Ошибка отправки. Попробуйте ещё раз.</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending' || rating === 0}
            className="flex items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            {status === 'sending' ? 'Отправляем...' : 'Отправить отзыв'}
          </button>
        </form>
      </div>
    </section>
  );
}
