import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Menu, Phone, X } from 'lucide-react';
import { Logo } from './Logo';
import { navGroups, CONTACT } from '@/data/nav';

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-500"
      style={{
        background: scrolled
          ? 'linear-gradient(135deg, rgba(10,10,10,0.75) 0%, rgba(18,18,18,0.85) 100%)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(28px) saturate(120%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(120%)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.10)'
          : '1px solid transparent',
        boxShadow: scrolled
          ? '0 8px 32px rgba(0,0,0,0.60), inset 0 1px 0 rgba(255,255,255,0.06)'
          : 'none',
      }}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-1 lg:py-2 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Logo className="h-14 w-auto lg:h-28 xl:h-32" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setActiveGroup(group.label)}
              onMouseLeave={() => setActiveGroup(null)}
            >
              <button className="rounded px-3 py-2 text-[13px] uppercase tracking-wide text-foreground/80 transition hover:text-primary">
                {group.label}
              </button>
              {activeGroup === group.label && (
                <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2">
                  <div className="rounded-md border border-border bg-card p-3 shadow-2xl">
                    {group.links.map((l, i) => (
                      <Link
                        key={i}
                        href={l.href}
                        className="block rounded px-3 py-2 text-sm text-foreground/85 transition hover:bg-white/5 hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 flex-col items-end gap-0.5 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="text-base font-semibold tracking-wide text-foreground/90 transition hover:text-primary"
          >
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.phone2Href}
            className="text-base font-semibold tracking-wide text-foreground/90 transition hover:text-primary"
          >
            {CONTACT.phone2}
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-[12px] text-foreground/50 transition hover:text-primary"
          >
            Или напишите нам в What's App
          </a>
          <div className="flex items-center gap-3 mt-0.5">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-[12px] text-foreground/60 transition hover:text-primary"
            >
              Instagram
            </a>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noreferrer"
              className="text-[12px] text-foreground/60 transition hover:text-primary"
            >
              Telegram
            </a>
          </div>
        </div>

        <button
          className="flex items-center justify-center rounded p-2 text-foreground lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Открыть меню"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background lg:hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <Logo className="h-24 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Закрыть меню" className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {navGroups.map((group) => (
              <details key={group.label} className="mb-2 border-b border-border pb-2">
                <summary className="cursor-pointer py-2 text-sm uppercase tracking-wide text-foreground/90">
                  {group.label}
                </summary>
                <div className="pl-2">
                  {group.links.map((l, i) => (
                    <Link
                      key={i}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-foreground/75"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </div>
          <div className="border-t border-border p-4">
            <a
              href={CONTACT.phoneHref}
              className="mb-1 flex items-center gap-2 text-base font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" /> {CONTACT.phone}
            </a>
            <a
              href={CONTACT.phone2Href}
              className="mb-3 flex items-center gap-2 text-base font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" /> {CONTACT.phone2}
            </a>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noreferrer"
              className="block rounded-sm bg-primary px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-primary-foreground"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
