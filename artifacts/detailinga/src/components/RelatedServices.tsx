import { Link } from 'wouter';
import { relatedServices } from '@/data/pages';

export function RelatedServices() {
  return (
    <section className="section-pad bg-[#111111]">
      <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-medium md:text-3xl">Дополнительные услуги</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {relatedServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block rounded-md border border-border bg-card p-6 transition hover:border-primary/50"
            >
              <h3 className="mb-2 text-lg font-medium gold-text">{s.title}</h3>
              <p className="text-sm text-foreground/70">{s.text}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-wide text-primary opacity-0 transition group-hover:opacity-100">
                Подробнее →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
