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
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled ? 'bg-background/95 border-border backdrop-blur' : 'bg-background/70 border-transparent backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-2 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Logo className="h-12 w-12 md:h-14 md:w-14" />
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

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="text-sm font-medium tracking-wide text-foreground/90 transition hover:text-primary"
          >
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-primary px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90"
          >
            Связаться с нами
          </a>
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
            <Logo className="h-10 w-10" />
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
              className="mb-3 flex items-center gap-2 text-base font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" /> {CONTACT.phone}
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
