import { Link } from 'wouter';
import { Logo } from './Logo';
import { footerColumns, CONTACT } from '@/data/nav';

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-border bg-[#030b18]">
      <div className="mx-auto max-w-[1320px] px-4 py-14 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-border pb-10 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3">
            <Logo className="h-16 w-auto" />
            <div>
              <p className="text-lg font-semibold tracking-wide">Точка детейлинга</p>
              <p className="text-sm text-muted-foreground">Премиальный детейлинг автомобилей</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-foreground/80 lg:items-end">
            <a href={CONTACT.phoneHref} className="text-base font-medium text-foreground hover:text-primary">
              {CONTACT.phone}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="hover:text-primary">
              Или напишите нам в What&apos;s App
            </a>
            <div className="flex gap-4 pt-1">
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                Instagram
              </a>
              <a href={CONTACT.telegram} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
          {footerColumns.map((col) => (
            <div key={col.label}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{col.label}</p>
              <ul className="space-y-2">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <Link href={l.href} className="text-sm text-foreground/70 hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Точка детейлинга. Все права защищены.</p>
          <Link href="/personal" className="hover:text-foreground">
            Политика конфиденциальности и обработки персональных данных
          </Link>
        </div>
      </div>
    </footer>
  );
}
