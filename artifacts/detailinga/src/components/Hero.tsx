import { CONTACT } from '@/data/nav';

const stats = [
  { value: '>20', label: 'лет практического опыта работы на рынке.' },
  { value: '15 300', label: 'обслуженных автомобилей разных моделей и классов.' },
  { value: '9 600', label: 'довольных клиентов, регулярно приезжающих к нам.' },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#030b18]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/urus-hero-poster.webp"
      >
        <source src="/videos/urus-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pt-44 pb-24 lg:px-8 lg:pt-52">
        <h1 className="max-w-2xl text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
          Комплексные решения <span className="gold-gradient-text">для вашего автомобиля</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/75">
          Защищаем, преображаем и дооснащаем автомобили премиум-класса. Работаем быстро, с гарантией — чтобы ваш автомобиль выглядел лучше, чем с завода.
        </p>

        <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="max-w-[220px]">
              <p className="text-3xl font-semibold gold-gradient-text md:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs leading-snug text-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>

        <a
          href={CONTACT.telegram}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block rounded-sm bg-primary px-9 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90"
        >
          Связаться с нами
        </a>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 opacity-70">
          {['Lamborghini', 'Audi', 'Porsche', 'Ferrari'].map((b) => (
            <span key={b} className="text-lg font-semibold tracking-widest text-foreground/60">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
