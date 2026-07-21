import { useEffect } from 'react';
import { useParams } from 'wouter';
import { CheckCircle2 } from 'lucide-react';
import { servicePages } from '@/data/pages';
import { TelegramBanner } from '@/components/TelegramBanner';
import { ContactForm } from '@/components/ContactForm';
import { RelatedServices } from '@/components/RelatedServices';
import { CONTACT } from '@/data/nav';
import NotFound from './not-found';

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const data = servicePages.find((p) => p.slug === slug);

  useEffect(() => {
    if (data) {
      document.title = `${data.title} | Brutaliti Detailing`;
    }
  }, [data]);

  if (!data) return <NotFound />;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-[#0a0a0a] pt-32 lg:pt-36">
        <div className="mx-auto max-w-[1320px] px-4 py-20 lg:px-8 lg:py-28">
          <h1 className="max-w-3xl whitespace-pre-line text-3xl font-medium leading-tight md:text-5xl">
            {data.h1}
          </h1>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-sm bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90"
          >
            Связаться с нами
          </a>
        </div>
      </section>

      <section className="section-pad bg-[#111111]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-base leading-relaxed text-foreground/80">{data.intro}</p>
            {data.secondaryTitle && (
              <h2 className="mt-8 text-xl font-medium gold-text">{data.secondaryTitle}</h2>
            )}
            {data.secondary && (
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{data.secondary}</p>
            )}
          </div>

          {data.bullets && (
            <div className="rounded-md border border-border bg-card p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">Что входит</p>
              <ul className="space-y-3">
                {data.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 gold-text" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {data.images.length > 0 && (
        <section className="section-pad bg-[#0a0a0a]">
          <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
            <div
              className={
                data.images.length === 1
                  ? 'mx-auto grid max-w-3xl gap-4'
                  : data.images.length === 2
                    ? 'grid gap-4 sm:grid-cols-2'
                    : data.images.length === 3
                      ? 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
                      : 'grid gap-4 sm:grid-cols-2 lg:grid-cols-4'
              }
            >
              {data.images.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-md border border-border">
                  <img src={src} alt={data.h1} className="h-72 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedServices />
      <TelegramBanner />
      <ContactForm />
    </div>
  );
}
