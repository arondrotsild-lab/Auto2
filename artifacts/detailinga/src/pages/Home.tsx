import { Link } from 'wouter';
import { Hero } from '@/components/Hero';
import { TelegramBanner } from '@/components/TelegramBanner';
import { ContactForm } from '@/components/ContactForm';
import { CONTACT, navGroups } from '@/data/nav';
import { ShieldCheck, Sparkles, MessageCircleHeart } from 'lucide-react';

const galleryImages = [
  { src: '/images/6bfa0a6dac0d-96d6d93f-c97e-4546-9.webp', label: 'Защита кузова' },
  { src: '/images/b6db6ea8e808-6809e220-a19e-41cd-a.webp', label: 'Химчистка' },
  { src: '/images/7bbb8dce0e49-b1b91051-11e1-40aa-8.webp', label: 'Диски литые' },
  { src: '/images/c7fcf95ff88b-1417f69a-3bd8-41f3-9.webp', label: 'Комплексная мойка' },
  { src: '/images/c63c21a12d01-cf359342-d008-400c-a.webp', label: 'Защита лобового стекла' },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Оригинальные комплектующие',
    text: 'От официальных представителей и производителей',
  },
  {
    icon: Sparkles,
    title: 'Профессиональная установка',
    text: 'Выполняем работы в собственном центре',
  },
  {
    icon: MessageCircleHeart,
    title: 'Гарантия на установку',
    text: 'Гарантируем надежность и качество комплектующих',
  },
];

export function Home() {
  return (
    <div>
      <Hero />

      <section className="section-pad bg-[#030b18]">
        <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
          <h2 className="mb-6 text-2xl font-medium md:text-3xl">Преимущества работы с нами</h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <p className="text-sm leading-relaxed text-foreground/75 md:text-base">
              Приносить пользу людям, быть профессионалами своего дела, получать удовольствие от работы — для нас это
              более ценно, чем просто зарабатывать деньги. Поэтому мы в постоянном движении. Перенимаем опыт у
              профессионалов, посещаем главные детейлинг-выставки мира. Разрабатываем собственные составы керамики
              для защиты кузова и химчистки салона, используем материалы мировых брендов: Meguiar&rsquo;s, Chemical
              Guys, Lake Country и др. Мы первые запустили полноценную онлайн-школу для профессиональных детейлеров,
              автовладельцев и владельцев бизнеса, чтобы наш опыт и знания стали доступны большему количеству людей.
            </p>
            <div className="flex flex-col gap-6">
              <div className="rounded-md border border-border bg-card p-6">
                <p className="mb-1 text-sm uppercase tracking-wide text-primary">Реальные отзывы</p>
                <p className="text-sm text-foreground/70">
                  Положительные отзывы наших клиентов — реальное подтверждение качества нашей работы
                </p>
                <a href="#reviews" className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide gold-text">
                  Смотреть отзывы →
                </a>
              </div>
              <div className="rounded-md border border-border bg-card p-6">
                <p className="mb-1 text-sm uppercase tracking-wide text-primary">Качественные материалы</p>
                <p className="text-sm text-foreground/70">
                  Работаем только с проверенными составами и плёнками мировых брендов
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#050e1f]">
        <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-medium md:text-3xl">Дополнительные услуги нашего центра</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {navGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide gold-text">{group.label}</p>
                <ul className="space-y-2">
                  {group.links.slice(0, 5).map((l, i) => (
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
        </div>
      </section>

      <section className="section-pad border-y border-border bg-[#030b18]">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-4 px-4 text-center lg:px-8">
          <h2 className="text-2xl font-medium md:text-3xl">Остались вопросы? Закажите звонок</h2>
          <p className="text-sm text-muted-foreground">и наш менеджер проконсультирует Вас</p>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-sm bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90"
          >
            Заказать звонок
          </a>
        </div>
      </section>

      <section id="reviews" className="section-pad bg-[#030b18]">
        <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-medium md:text-3xl">Выполненные работы</h2>
            <a href={CONTACT.telegram} target="_blank" rel="noreferrer" className="text-sm gold-text hover:underline">
              Смотреть все работы в нашем канале →
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {galleryImages.map((g) => (
              <div key={g.label} className="group relative overflow-hidden rounded-md border border-border">
                <img
                  src={g.src}
                  alt={g.label}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-3">
                  <p className="text-sm font-medium">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-pad bg-[#050e1f]">
        <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-medium md:text-3xl">Гарантируем надежность и качество</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {guarantees.map((g, i) => (
              <div key={g.title} className="rounded-md border border-border bg-card p-8 text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border gold-border">
                  <g.icon className="h-6 w-6 gold-text" />
                </span>
                <p className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">0{i + 1}</p>
                <h3 className="mb-2 text-base font-medium">{g.title}</h3>
                <p className="text-sm text-foreground/70">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="sr-only" aria-hidden="true" />

      <TelegramBanner />
      <ContactForm />
    </div>
  );
}
