import { useRef, useState } from 'react';
import { Link } from 'wouter';
import { Hero } from '@/components/Hero';
import { TelegramBanner } from '@/components/TelegramBanner';
import { ContactForm } from '@/components/ContactForm';
import { CONTACT, navGroups } from '@/data/nav';
import { ShieldCheck, Sparkles, MessageCircleHeart, Award, Star, Users, Volume2, VolumeX } from 'lucide-react';

/* ── iPhone 17 Pro Max mockup ─────────────────────────────────────────── */
function IPhoneMockup({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);

  function handleClick() {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !muted;
    video.muted = newMuted;
    if (!newMuted) video.play();
    setMuted(newMuted);
  }

  return (
    <div className="relative flex-shrink-0 select-none" style={{ width: 178 }}>

      {/* Left buttons */}
      <div style={{ position: 'absolute', left: -4, top: 86, zIndex: 2, display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div style={{ width: 4, height: 24, background: 'linear-gradient(180deg,#444 0%,#222 100%)', borderRadius: '3px 0 0 3px', marginBottom: 8 }} />
        <div style={{ width: 4, height: 36, background: 'linear-gradient(180deg,#444 0%,#222 100%)', borderRadius: '3px 0 0 3px', marginBottom: 8 }} />
        <div style={{ width: 4, height: 36, background: 'linear-gradient(180deg,#444 0%,#222 100%)', borderRadius: '3px 0 0 3px' }} />
      </div>

      {/* Right button (power) */}
      <div style={{ position: 'absolute', right: -4, top: 116, zIndex: 2, width: 4, height: 60, background: 'linear-gradient(180deg,#444 0%,#222 100%)', borderRadius: '0 3px 3px 0' }} />

      {/* iPhone body — titanium finish */}
      <div style={{
        borderRadius: 46,
        background: 'linear-gradient(145deg, #505050 0%, #1c1c1e 30%, #2e2e30 60%, #1c1c1e 100%)',
        padding: 3,
        boxShadow: [
          'inset 0 0 0 0.5px rgba(255,255,255,0.18)',
          'inset 0 1px 1px rgba(255,255,255,0.08)',
          '0 2px 4px rgba(0,0,0,0.6)',
          '0 20px 60px rgba(0,0,0,0.75)',
          '0 0 0 0.5px rgba(0,0,0,0.4)',
        ].join(', '),
        position: 'relative',
      }}>

        {/* Screen bezel */}
        <div
          style={{
            borderRadius: 44,
            overflow: 'hidden',
            background: '#000',
            position: 'relative',
            height: 384,
            cursor: 'pointer',
          }}
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Video — full clean screen */}
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />

          {/* Sound toggle hint — shows on hover or when unmuted */}
          <div style={{
            position: 'absolute',
            bottom: 14,
            right: 14,
            zIndex: 10,
            opacity: hovered || !muted ? 1 : 0,
            transition: 'opacity 0.2s ease',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(6px)',
            borderRadius: 20,
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: 5,
          }}>
            {muted
              ? <VolumeX style={{ width: 13, height: 13, color: 'rgba(255,255,255,0.8)' }} />
              : <Volume2 style={{ width: 13, height: 13, color: '#b08d57' }} />
            }
            <span style={{ fontSize: 10, color: muted ? 'rgba(255,255,255,0.7)' : '#b08d57', fontWeight: 600, letterSpacing: '0.04em' }}>
              {muted ? 'ТАП' : 'ЗВУК'}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ── Works videos ─────────────────────────────────────────────────────── */
const workVideos = [
  { src: '/videos/work-1.mp4',  poster: '/images/6bfa0a6dac0d-96d6d93f-c97e-4546-9.webp',  label: 'Защита кузова' },
  { src: '/videos/work-2.mp4',  poster: '/images/b6db6ea8e808-6809e220-a19e-41cd-a.webp',  label: 'Химчистка' },
  { src: '/videos/work-3.mp4',  poster: '/images/7bbb8dce0e49-b1b91051-11e1-40aa-8.webp',  label: 'Диски литые' },
  { src: '/videos/work-4.mp4',  poster: '/images/c7fcf95ff88b-1417f69a-3bd8-41f3-9.webp',  label: 'Комплексная мойка' },
  { src: '/videos/work-5.mp4',  poster: '/images/c63c21a12d01-cf359342-d008-400c-a.webp',  label: 'Защита стекла' },
  { src: '/videos/work-6.mp4',  poster: '/images/0a3db5fc2f81-to4ka_detailinga-202.webp',  label: 'Керамика' },
  { src: '/videos/work-7.mp4',  poster: '/images/0a48af105aa9-DSCF9532.webp',              label: 'Полировка' },
  { src: '/videos/work-8.mp4',  poster: '/images/0a325f1becba-P1100745.webp',              label: 'Детейлинг' },
  { src: '/videos/work-9.mp4',  poster: '/images/12930cbfddd0-DSCF4668.webp',              label: 'Антигравий' },
  { src: '/videos/work-10.mp4', poster: '/images/079cc3685ee6-XXXL1.webp',                 label: 'Тонировка' },
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

      <section className="section-pad bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1320px] px-4 lg:px-8">

          {/* Top: image + text side by side */}
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Car image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/gelentvagen-white.jpg"
                alt="Детейлинг премиум автомобиля"
                className="h-[340px] w-full object-cover object-center lg:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 backdrop-blur-sm">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium text-white">Более 600 довольных клиентов</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-primary/80">Почему выбирают нас</p>
              <h2 className="mb-5 text-2xl font-bold leading-snug md:text-3xl lg:text-4xl">
                Более 6 лет доверия —<br />ваш автомобиль в<br className="hidden lg:block" /> надёжных руках
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-foreground/70 md:text-base">
                За более чем 6 лет работы мы стали выбором тех, кто ценит результат, а не обещания.
                Мы не беремся за работу ради галочки: каждый автомобиль обрабатываем так,
                как будто это наш собственный. Только проверенные мастера, только оригинальные
                материалы, только честные сроки — и ни одной сданной работы без вашего одобрения.
                Нам доверяют повторно, и это говорит само за себя.
              </p>
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-sm bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90"
              >
                Получить консультацию
              </a>
            </div>
          </div>

          {/* Bottom: 4 trust cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: 'Более 6 лет на рынке',
                text: 'Мы работаем с 2018 года. Репутация — живая, заработанная реальными результатами, а не рекламой',
              },
              {
                icon: ShieldCheck,
                title: 'Письменная гарантия',
                text: 'Фиксируем гарантию документально. Обнаружили дефект после нас — устраняем бесплатно, без споров',
              },
              {
                icon: Sparkles,
                title: 'Только оригинальные материалы',
                text: 'Работаем исключительно с сертифицированными составами и плёнками: 3M, Llumar, Meguiar\'s, Chemical Guys',
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition hover:border-primary/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-sm leading-relaxed text-foreground/60">{text}</p>
              </div>
            ))}

            {/* Highlighted reviews card */}
            <Link href="/reviews" className="group flex flex-col gap-3 rounded-xl border-2 border-primary/60 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 shadow-lg shadow-primary/10 transition hover:border-primary hover:shadow-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="font-semibold text-foreground">Клиенты возвращаются снова</p>
              <p className="text-sm leading-relaxed text-foreground/60">Более 1 400 довольных клиентов — большинство приезжают повторно и рекомендуют нас друзьям</p>
              <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-primary transition group-hover:gap-2">
                Смотреть отзывы →
              </span>
            </Link>
          </div>

        </div>
      </section>

      <section className="section-pad border-y border-border bg-[#0a0a0a]">
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

      <section id="reviews" className="section-pad bg-[#0a0a0a] overflow-hidden">
        <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-primary/80">Наши работы</p>
              <h2 className="text-2xl font-medium md:text-3xl">Выполненные работы</h2>
            </div>
            <a href={CONTACT.telegram} target="_blank" rel="noreferrer" className="text-sm gold-text hover:underline">
              Смотреть все работы в нашем канале →
            </a>
          </div>
        </div>

        {/* Ambient glow */}
        <div style={{
          position: 'relative',
          marginBottom: '0',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: 300,
            background: 'radial-gradient(ellipse, rgba(176,141,87,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          {/* Scrollable phones row */}
          <div
            style={{
              display: 'flex',
              gap: 24,
              overflowX: 'auto',
              paddingLeft: 'max(16px, calc((100vw - 1320px) / 2 + 32px))',
              paddingRight: 'max(16px, calc((100vw - 1320px) / 2 + 32px))',
              paddingTop: 16,
              paddingBottom: 32,
              scrollbarWidth: 'none',
              position: 'relative',
              zIndex: 1,
            }}
            className="[&::-webkit-scrollbar]:hidden"
          >
            {workVideos.map((v, i) => (
              <IPhoneMockup key={i} src={v.src} poster={v.poster} />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
          <p className="text-center text-xs text-foreground/40">Прокрутите вправо, чтобы увидеть все работы</p>
        </div>
      </section>

      <section className="section-pad bg-[#111111]">
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

      <section id="about" className="section-pad bg-[#111111]">
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
