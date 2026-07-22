import {
  SiToyota, SiBmw, SiAudi, SiVolkswagen, SiHonda,
  SiHyundai, SiKia, SiNissan, SiPorsche, SiVolvo,
  SiMazda, SiFerrari, SiLamborghini, SiSkoda, SiRenault,
  SiPeugeot, SiFord, SiJeep, SiMitsubishi, SiSubaru,
  SiSuzuki, SiBentley, SiOpel,
} from 'react-icons/si';
import { CONTACT } from '@/data/nav';

const stats = [
  { value: '6', label: 'лет практического опыта работы на рынке.' },
  { value: '1 400', label: 'обслуженных автомобилей разных моделей и классов.' },
  { value: '600', label: 'довольных клиентов, регулярно приезжающих к нам.' },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[700px] items-center overflow-hidden bg-[#0a0a0a] lg:min-h-[820px]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/urus-hero-poster.jpg"
      >
        <source src="/videos/urus-hero-hq.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pt-28 pb-8 lg:px-8 lg:pt-52 lg:pb-24">
        <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
          <span className="gold-gradient-text">Доступный премиальный детейлинг</span> любого класса
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/75 lg:mt-5 lg:text-base">
          Защищаем, преображаем и дооснащаем автомобили премиум и эконом-класса. Работаем быстро, с гарантией — чтобы ваш автомобиль выглядел лучше, чем с завода.
        </p>

        <div className="mt-4 grid grid-cols-3 gap-3 lg:mt-10 lg:flex lg:flex-wrap lg:gap-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-xl font-semibold gold-gradient-text md:text-3xl lg:text-4xl">{s.value}</p>
              <p className="mt-0.5 text-[10px] leading-snug text-foreground/70 lg:mt-1 lg:text-xs lg:max-w-[220px]">{s.label}</p>
            </div>
          ))}
        </div>

        <a
          href={CONTACT.telegram}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block rounded-sm bg-primary px-9 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90 lg:mt-10 lg:py-4"
        >
          Связаться с нами
        </a>

        <div className="mt-14">
          <p className="mb-4 text-xs uppercase tracking-widest text-foreground/40">Работаем со всеми марками</p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
            {[
              { Icon: SiToyota,     name: 'Toyota' },
              { Icon: SiBmw,        name: 'BMW' },
              { Icon: SiAudi,       name: 'Audi' },
              { Icon: SiVolkswagen, name: 'VW' },
              { Icon: SiOpel,       name: 'Opel' },
              { Icon: SiHonda,      name: 'Honda' },
              { Icon: SiHyundai,    name: 'Hyundai' },
              { Icon: SiKia,        name: 'Kia' },
              { Icon: SiNissan,     name: 'Nissan' },
              { Icon: SiMazda,      name: 'Mazda' },
              { Icon: SiPorsche,    name: 'Porsche' },
              { Icon: SiVolvo,      name: 'Volvo' },
              { Icon: SiFerrari,    name: 'Ferrari' },
              { Icon: SiLamborghini,name: 'Lamborghini' },
              { Icon: SiBentley,    name: 'Bentley' },
              { Icon: SiFord,       name: 'Ford' },
              { Icon: SiRenault,    name: 'Renault' },
              { Icon: SiPeugeot,    name: 'Peugeot' },
              { Icon: SiSkoda,      name: 'Škoda' },
              { Icon: SiMitsubishi, name: 'Mitsubishi' },
              { Icon: SiSubaru,     name: 'Subaru' },
              { Icon: SiJeep,       name: 'Jeep' },
              { Icon: SiSuzuki,     name: 'Suzuki' },
            ].map(({ Icon, name }) => (
              <div key={name} className="flex flex-col items-center gap-1 opacity-50 transition hover:opacity-90">
                <Icon className="h-7 w-7 text-white" />
                <span className="text-[10px] tracking-wide text-foreground/60">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
