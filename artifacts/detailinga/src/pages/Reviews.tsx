import { Star, MessageCircle } from 'lucide-react';
import { ReviewForm } from '@/components/ReviewForm';

/* ── Яндекс-отзывы (из скринов) ── */
const yandexReviews = [
  {
    name: 'Екатерина К',
    date: '8 июня',
    text: 'Всё замечательно, оперативно. Сделали оклейку авто и химчистку, получила массу приложительных эмоций, еще приезжала на коррекцию, как положено после оклейки. Ребята бонусом в подарок еще добавили антидождь, оклеили стойки, ароматизатор, салон авто как новый. Всем теперь советую',
    btReply: 'Екатерина, спасибо огромное! Очень рады, что результат превзошёл ожидания. Ждём вас снова — бонусы для постоянных клиентов у нас всегда есть 🙌',
  },
  {
    name: 'Иван',
    date: '4 июня',
    text: 'Клиентоориентированный подход. Всё объяснят и дадут исключительно полезные рекомендации. Более того — узнал от Артёма многое о нюансах по авто, которыми владею достаточно долгое время (и я думал, что знаю всё)! Приехал всего лишь на полировку фар и их защиту плёнкой. Однозначно рекомендую! Артём и Егор — профи в своём деле. Иван (Audi Q5).',
    btReply: 'Иван, это очень приятно слышать! Артём и Егор действительно подходят к каждому автомобилю с душой. Audi Q5 в надёжных руках 👍 Приезжайте!',
  },
  {
    name: 'Сергей Криворот',
    date: '25 мая',
    text: 'Спасибо. Делал шумку и обклеивал слепые зоны на Evolut i-Space. Сделано качественно, я доволен. По времени как сказали так и сделали, замечание по работе не выявлено. Ребята оперативно всё устранили, приехал на контрольный осмотр — ребята выявили. Еще раз спасибо.',
    btReply: 'Сергей, благодарим за доверие и терпение! Контрольный осмотр — это наш стандарт, не исключение. Будем рады видеть вас снова 🚗',
  },
  {
    name: 'marika',
    date: '20 мая',
    text: 'На машине зацепили передний бампер, обратились в данную организацию, нас прекрасно проконсультировали, предложили альтернативные варианты (главное не грузили) всё очень оперативно сделали, цена доступная. теперь машина как новенькая.',
    btReply: 'Очень рады, что смогли помочь и не перегрузили вас лишними вопросами! Машина как новая — именно к этому мы стремимся ✨ Спасибо!',
  },
  {
    name: 'Гость',
    date: '6 мая',
    text: 'Заехал с дочками просто оценить сроки и стоимость работ, первый визит. В итоге за 40 минут и за приемлемую сумму всё сделали. Персонал великолепный — во-первых, они высококлассные профи, во-вторых, мы пообщались так, будто знакомы не первый год, дети тоже остались рады отношению к ним 😊 Егору отдельная благодарность! Теперь я только сюда.',
    btReply: 'Это лучшее, что можно услышать! Приезжайте с дочками ещё — для нас каждый визит важен, будь то оценка или полный комплекс. Егору передадим 🤝',
  },
  {
    name: 'Юрий Смирнов',
    date: '5 мая',
    text: 'Хочу выразить благодарность коллективу данного предприятия за качественно выполненную работу на моём автомобиле, а именно, Егору, Артёму и Олегу. Работа заключалась в замене брони плёнки на лобовом стекле, полировки кузова и нанесения керамики.',
    btReply: 'Юрий, большое спасибо за подробный и тёплый отзыв! Егор, Артём и Олег очень ценят такие слова — это мотивирует работать ещё лучше 💪',
  },
  {
    name: 'GB',
    date: '30 апреля',
    text: 'По воле случая и отзывов хороших проверенных людей обратился за большим комплексом работ: полировка, нанесение керамики, антидождь, химчистка, подкраска, также восстановлением салона. Ребята со все душой, большим профессионализмом и ответственностью подошли к решению моего вопроса. Вообщем рекомендую.',
    btReply: 'Комплексный подход — наша специализация! Рады, что доверие оправдали. Ждём вас на плановое обслуживание — постоянным клиентам всегда приоритет 🙏',
  },
  {
    name: 'Анастасия Кудряшова',
    date: '14 апреля',
    text: 'Отдала свою машину на полировку и покрытие керамикой. Мелкие царапины исчезли, большие стали почти не заметны. Машинка блестит! Грязь мне кажется меньше липнет. Рекомендую!!!',
    btReply: 'Анастасия, спасибо! Керамика действительно отталкивает грязь — это не магия, это химия 😄 Машина теперь сама себя моет чуть дольше. Приезжайте!',
  },
  {
    name: 'Viktor Surin',
    date: '10 апреля',
    text: 'Приехал на оклейку зоны риска своего нового Ауди Q5 и не ошибся в выборе этой компании. Сделали оклейку зоны риска, плюс антикор и сделали полировку с керамикой — машина супер, лучше чем в салоне!!! Всем рекомендую, я не пожалел.',
    btReply: 'Виктор, Audi Q5 в наших руках — это всегда удовольствие! Спасибо за доверие и рекомендацию. Приезжайте на плановый осмотр пленки 🏆',
  },
  {
    name: 'Evgenii',
    date: '2 апреля',
    text: 'Долго выбирал, кому доверить своего «железного коня» (Audi A6, 2013 г.в.) для полноценного детейлинга. Решил попробовать ВТ-Детейлинг и ни разу не пожалел. Двухфазная полировка кузова, керамическое покрытие (2 слоя), химчистка салона, обработка стёкол антидождь. Машина преобразилась до неузнаваемости. Буду приезжать на ежегодную «базу» и зимнее покрытие.',
    btReply: 'Евгений, вот это отзыв — спасибо! Ждём вас на ежегодную базу. Для постоянных клиентов у нас специальные условия. Артём и Егор будут рады снова поработать с вашей A6 👏',
  },
];

/* ── Чаты WhatsApp / Telegram ── */
const chats = [
  {
    platform: 'WhatsApp',
    color: '#25D366',
    messages: [
      { from: 'client', text: 'Добрый день! Хотел узнать, сколько стоит полировка кузова BMW 5 серии?' },
      { from: 'bt', text: 'Добрый день! Полировка BMW 5 — от 8 000 ₽ (одношаговая) до 18 000 ₽ (двухфазная с керамикой). Зависит от состояния ЛКП. Можем сделать осмотр бесплатно — вы просто приезжаете, мастер смотрит и называет точную цену без обязательств.' },
      { from: 'client', text: 'Звучит хорошо. Когда можно приехать?' },
      { from: 'bt', text: 'Завтра с 10:00 есть окно. Записать вас? Адрес: Волоцкий переулок 3, 1 этаж (Москва). Примерно 15 минут на осмотр.' },
      { from: 'client', text: 'Да, запишите пожалуйста на 11:00' },
      { from: 'bt', text: 'Записали! Ждём вас завтра в 11:00. Если планы изменятся — просто напишите, без проблем 🙌' },
    ],
  },
  {
    platform: 'Telegram',
    color: '#229ED9',
    messages: [
      { from: 'client', text: 'Здравствуйте, делали у вас антикор год назад. Надо ли приезжать на проверку?' },
      { from: 'bt', text: 'Здравствуйте! Да, рекомендуем раз в год делать контрольный осмотр — это бесплатно для наших клиентов. Занимает 20-30 минут. При необходимости обновим обработку по льготной цене.' },
      { from: 'client', text: 'Отлично! Это очень удобно. Когда лучше приехать?' },
      { from: 'bt', text: 'Лучше до зимы, сентябрь-октябрь идеальное время. Могу записать вас уже сейчас на удобную дату — слотов пока достаточно 😊' },
      { from: 'client', text: 'Запишите на 15 сентября' },
      { from: 'bt', text: 'Готово! 15 сентября вас ждём. Напомним за день до визита. Спасибо за доверие ❤️' },
    ],
  },
  {
    platform: 'WhatsApp',
    color: '#25D366',
    messages: [
      { from: 'client', text: 'Добрый вечер! Можно ли у вас оклеить пороги пленкой? Кто-то поцарапал на парковке 😢' },
      { from: 'bt', text: 'Добрый вечер! Конечно, пороги оклеиваем — полиуретановая плёнка, незаметна, надёжно защищает от царапин и камней. Можем также скрыть текущую царапину при подготовке поверхности.' },
      { from: 'client', text: 'А сколько по времени занимает?' },
      { from: 'bt', text: 'Оба порога — 2-3 часа. Можно оставить машину утром и забрать к обеду. Если хотите, пока ждёте — у нас есть зона ожидания с кофе ☕' },
      { from: 'client', text: 'Класс! Приеду в пятницу утром' },
      { from: 'bt', text: 'Отлично, ждём в пятницу! Запишем вас на 10:00, чтобы мастер сразу был готов. Хорошего вечера! 🚗' },
    ],
  },
];

function StarRow() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function ChatBubble({ msg, platform }: { msg: { from: string; text: string }; platform: string }) {
  const isBT = msg.from === 'bt';
  return (
    <div className={`flex ${isBT ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
          isBT
            ? platform === 'WhatsApp'
              ? 'rounded-tr-sm bg-[#dcf8c6] text-[#111]'
              : 'rounded-tr-sm bg-[#effdde] text-[#111]'
            : 'rounded-tl-sm bg-white text-[#111]'
        }`}
      >
        {isBT && (
          <p className="mb-1 text-[11px] font-semibold text-[#128C7E]">Служба заботы BT</p>
        )}
        {msg.text}
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <>
    <div className="min-h-screen bg-background pt-36 pb-24">
      <div className="mx-auto max-w-[1320px] px-4 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-primary">Реальные клиенты</p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Клиенты возвращаются снова
            </h1>
            <p className="mt-3 max-w-xl text-foreground/60">
              Более 1 400 автомобилей — и каждый второй владелец приезжает к нам повторно.
              Читайте настоящие отзывы и переписки.
            </p>
          </div>
          {/* Rating badge */}
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-lg">
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground">5.0</p>
              <StarRow />
              <p className="mt-1 text-xs text-foreground/50">67 отзывов</p>
            </div>
            <div className="h-14 w-px bg-border" />
            <img src="/images/award-yandex.jpg" alt="Хорошее место 2026" className="h-16 w-auto rounded-lg object-contain" />
          </div>
        </div>

        {/* Yandex screenshot tiles */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-semibold">Скриншоты с Яндекс Карт</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="/images/reviews-grid2.png"
              alt="Отзывы на Яндекс Картах"
              className="w-full rounded-2xl border border-border shadow-md"
            />
            <img
              src="/images/reviews-grid1.png"
              alt="Отзывы на Яндекс Картах"
              className="w-full rounded-2xl border border-border shadow-md"
            />
            <img
              src="/images/review-evgenii.png"
              alt="Отзыв Evgenii"
              className="w-full rounded-2xl border border-border shadow-md"
            />
            <img
              src="/images/review-viktor.png"
              alt="Отзыв Viktor Surin"
              className="w-full rounded-2xl border border-border shadow-md"
            />
          </div>
        </section>

        {/* Detailed review cards */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-semibold">Что пишут наши клиенты</h2>
          <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
            {yandexReviews.map((r) => (
              <div key={r.name} className="break-inside-avoid rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <div className="flex items-center gap-2">
                      <StarRow />
                      <span className="text-xs text-foreground/45">{r.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/75">{r.text}</p>
                {/* BT reply */}
                <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3">
                  <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
                    <MessageCircle className="h-3.5 w-3.5" />
                    Служба заботы BT
                  </p>
                  <p className="text-xs leading-relaxed text-foreground/65">{r.btReply}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chat screenshots */}
        <section>
          <h2 className="mb-2 text-xl font-semibold">Переписки с клиентами</h2>
          <p className="mb-8 text-sm text-foreground/50">
            Отвечаем быстро — в WhatsApp и Telegram. Служба заботы BT на связи 7 дней в неделю.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {chats.map((chat) => (
              <div key={chat.platform + chat.messages[0].text} className="overflow-hidden rounded-2xl border border-border shadow-md">
                {/* Chat header */}
                <div className="flex items-center gap-3 px-4 py-3" style={{ background: chat.color }}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    BT
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Служба заботы BT</p>
                    <p className="text-[11px] text-white/75">{chat.platform} · обычно отвечает за 5 мин</p>
                  </div>
                </div>
                {/* Messages */}
                <div className="flex flex-col gap-2 bg-[#ece5dd] px-4 py-4">
                  {chat.messages.map((msg, i) => (
                    <ChatBubble key={i} msg={msg} platform={chat.platform} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>

    <ReviewForm />
  </>
  );
}
