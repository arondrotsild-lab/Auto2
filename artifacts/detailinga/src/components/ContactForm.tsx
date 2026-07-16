import { useState } from 'react';
import { CONTACT } from '@/data/nav';

export function ContactForm() {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.open(`${CONTACT.telegram}`, '_blank');
  };

  return (
    <section id="order" className="section-pad bg-[#0a0a0a]">
      <div className="mx-auto max-w-[720px] px-4 text-center lg:px-8">
        <h2 className="text-2xl font-medium md:text-3xl">
          Получите персональное предложение <span className="gold-gradient-text">под ваш автомобиль</span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Отправьте заявку и наш специалист свяжется с вами в ближайшее время
        </p>

        {sent ? (
          <p className="mt-8 text-base gold-text">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="tel"
              required
              placeholder="+7 ___ ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              className="shrink-0 rounded-sm bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90"
            >
              Отправить
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
          Осуществляя отправку, Вы соглашаетесь с{' '}
          <a href="/personal" className="underline hover:text-foreground">
            Политикой конфиденциальности и обработки персональных данных
          </a>
          .
        </p>
      </div>
    </section>
  );
}
