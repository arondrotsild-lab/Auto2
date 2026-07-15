export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    label: 'Кузов',
    links: [
      { label: 'Полиуретановая антигравийная пленка', href: '/okleyka-poliuretan' },
      { label: 'Защита фар полиуретановой пленкой', href: '/okleyka-poliuretan' },
      { label: 'Оклейка виниловой пленкой и смена цвета', href: '/okleyka-vinilom' },
      { label: 'Защитные покрытия кузова', href: '/pokrytie' },
      { label: 'Полировка кузова, фар и деталей', href: '/polirovka' },
      { label: 'Керамическая защита', href: '/pokrytie' },
      { label: 'Жидкое стекло', href: '/pokrytie' },
      { label: 'Полировка лобового', href: '/polirovka' },
      { label: 'Полировка декора', href: '/polirovka' },
      { label: 'Тонировка и атермальная пленка', href: '/tonirovka' },
    ],
  },
  {
    label: 'Интерьер',
    links: [
      { label: 'Химчистка салона', href: '/himchistka' },
      { label: 'Озонация', href: '/himchistka' },
      { label: 'Окрас / ремонт кожи', href: '/peretyazhka' },
      { label: 'Перешив руля', href: '/peretyazhka' },
      { label: 'Перешив сидений', href: '/peretyazhka' },
      { label: 'Тактилизация салона', href: '/peretyazhka' },
      { label: 'Аквапринт для элементов декора', href: '/peretyazhka' },
      { label: 'Керамическая защита кожи и текстиля', href: '/peretyazhka' },
    ],
  },
  {
    label: 'Дооснащение',
    links: [
      { label: 'Шумоизоляция', href: '/shumoizolyatciya' },
      { label: 'Антикор', href: '/antikor' },
      { label: 'Установка сигнализации', href: '/signalization' },
      { label: 'Автозапуск', href: '/signalization' },
      { label: 'Диагностика охраной системы', href: '/signalization' },
      { label: 'Изготовление ключей', href: '/signalization' },
      { label: 'Изготовление чипов', href: '/signalization' },
      { label: 'Установка парктроников', href: '/parktroniki' },
      { label: 'Установка доводчиков дверей', href: '/dovodchiki' },
    ],
  },
  {
    label: 'Стекла',
    links: [
      { label: 'Замена лобового стекла', href: '/skoly_i_treshiny' },
      { label: 'Бронирование лобового от сколов', href: '/skoly_i_treshiny' },
      { label: 'Бронь лобового от взлома', href: '/skoly_i_treshiny' },
      { label: 'Тонировка', href: '/skoly_i_treshiny' },
      { label: 'Атермальная пленка', href: '/skoly_i_treshiny' },
    ],
  },
  {
    label: 'Кузовной ремонт',
    links: [
      { label: 'Удаление вмятин без окраса', href: '/kuzovnoy_remont' },
      { label: 'Стапельные работы', href: '/kuzovnoy_remont' },
      { label: 'Локальный окрас', href: '/kuzovnoy_remont' },
      { label: 'Окрас целиком деталей', href: '/kuzovnoy_remont' },
      { label: 'Ремонт повреждений', href: '/kuzovnoy_remont' },
    ],
  },
  {
    label: 'Шиномонтаж/диски',
    links: [
      { label: 'Шиномонтаж', href: '/shinomontazh_i_diski' },
      { label: 'Окрас дисков', href: '/shinomontazh_i_diski' },
      { label: 'Ремонт дисков', href: '/shinomontazh_i_diski' },
      { label: 'Алмазная проточка', href: '/shinomontazh_i_diski' },
      { label: 'Керамическая защита дисков', href: '/shinomontazh_i_diski' },
    ],
  },
  {
    label: 'Детейлинг/мойка',
    links: [
      { label: 'Детейлинг мойка', href: '/moyka' },
      { label: 'Диэлектрическая мойка мотора', href: '/moyka' },
      { label: 'Детейлинг мойка днища', href: '/moyka' },
      { label: 'Антидождь', href: '/moyka' },
      { label: 'Трёхфазная мойка', href: '/moyka' },
    ],
  },
];

export const footerColumns: NavGroup[] = [
  {
    label: 'Кузов',
    links: [
      { label: 'Виниловая пленка', href: '/okleyka-vinilom' },
      { label: 'Полиуретановая пленка', href: '/okleyka-poliuretan' },
      { label: 'Тонировка и атермальная пленка', href: '/tonirovka' },
      { label: 'Защита фар', href: '/okleyka-poliuretan' },
      { label: 'Защитные покрытия', href: '/pokrytie' },
      { label: 'Антихром', href: '/okleyka-vinilom' },
      { label: 'Полировка', href: '/polirovka' },
    ],
  },
  {
    label: 'Интерьер',
    links: [
      { label: 'Окрас / ремонт кожи', href: '/peretyazhka' },
      { label: 'Перешив руля', href: '/peretyazhka' },
      { label: 'Перешив сидений', href: '/peretyazhka' },
      { label: 'Тактилизация салона', href: '/peretyazhka' },
      { label: 'Химчистка салона', href: '/himchistka' },
      { label: 'Озонация', href: '/himchistka' },
      { label: 'Антибактериальная дезинфекция салона', href: '/himchistka' },
    ],
  },
  {
    label: 'Дооснащения',
    links: [
      { label: 'Автосигнализация', href: '/signalization' },
      { label: 'Автозапуск', href: '/signalization' },
      { label: 'Мультимедийная система', href: '/signalization' },
      { label: 'Парктроники', href: '/parktroniki' },
      { label: 'Шумоизоляция', href: '/shumoizolyatciya' },
      { label: 'Антикор', href: '/antikor' },
      { label: 'Изготовление ключей', href: '/signalization' },
    ],
  },
  {
    label: 'Стекла',
    links: [
      { label: 'Замена любого стекла', href: '/skoly_i_treshiny' },
      { label: 'Бронирование лобового от сколов', href: '/skoly_i_treshiny' },
      { label: 'Бронь лобового от взлома', href: '/skoly_i_treshiny' },
    ],
  },
  {
    label: 'Кузовной ремонт',
    links: [
      { label: 'Удаление вмятин без окраса', href: '/kuzovnoy_remont' },
      { label: 'Стапельные работы', href: '/kuzovnoy_remont' },
      { label: 'Локальный окрас', href: '/kuzovnoy_remont' },
      { label: 'Окрас целиком деталей', href: '/kuzovnoy_remont' },
      { label: 'Ремонт повреждений', href: '/kuzovnoy_remont' },
    ],
  },
  {
    label: 'Шиномонтаж и диски',
    links: [
      { label: 'Шиномонтаж', href: '/shinomontazh_i_diski' },
      { label: 'Окрас дисков', href: '/shinomontazh_i_diski' },
      { label: 'Ремонт дисков', href: '/shinomontazh_i_diski' },
      { label: 'Алмазная проточка', href: '/shinomontazh_i_diski' },
    ],
  },
  {
    label: 'Детейлинг/мойка',
    links: [
      { label: 'Детейлинг мойка', href: '/moyka' },
      { label: 'Диэлектрическая мойка мотора', href: '/moyka' },
      { label: 'Детейлинг мойка днища', href: '/moyka' },
      { label: 'Антидождь', href: '/moyka' },
      { label: 'Трёхфазная мойка', href: '/moyka' },
    ],
  },
];

export const CONTACT = {
  phone: '+7 (958) 295-90-41',
  phoneHref: 'tel:+79582959041',
  telegram: 'https://t.me/BT_DetailingMoscow',
  whatsapp: 'https://wa.me/message/IQX2JDK2BEN7L1',
  instagram: 'https://www.instagram.com/tochkadetailinga',
};
