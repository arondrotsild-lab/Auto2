import { CONTACT } from '@/data/nav';
import { Send } from 'lucide-react';

export function TelegramBanner() {
  return (
    <section className="section-pad border-y border-border bg-gradient-to-r from-[#141414] via-[#1a1712] to-[#141414]">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-6 px-4 text-center lg:flex-row lg:text-left lg:px-8">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border gold-border bg-black">
            <Send className="h-6 w-6 gold-text" />
          </span>
          <h3 className="text-xl font-medium md:text-2xl">
            Актуальные работы и акции в{' '}
            <span className="gold-gradient-text">Telegram</span>
          </h3>
        </div>
        <a
          href={CONTACT.telegram}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-sm bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90"
        >
          Подписаться
        </a>
      </div>
    </section>
  );
}
