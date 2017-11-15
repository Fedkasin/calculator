var products = {
  posters: {
    name: 'Афиши',
    cover: false,
    insideBlock: false
  },
  tickets: {
    name: 'Билеты',
    cover: false,
    insideBlock: false
  },
  blanks: {
    name: 'Бланки',
    cover: false,
    insideBlock: false
  },
  brochures: {
    name: 'Брошюры',
    cover: true,
    insideBlock: true
  },
  journals: {
    name: 'Журналы',
    cover: true,
    insideBlock: true
  },
  catalogs: {
    name: 'Каталоги',
    cover: true,
    insideBlock: true
  },
  notepads: {
    name: 'Блокноты',
    cover: true,
    insideBlock: true
  },
  booklets: {
    name: 'Буклеты',
    cover: false,
    insideBlock: false
  },
  cards: {
    name: 'Визитки',
    cover: false,
    insideBlock: false
  },
  voblers: {
    name: 'Воблеры',
    cover: false,
    insideBlock: false
  },
  warrantyCoupons: {
    name: 'Гарантийные талоны',
    cover: false,
    insideBlock: false
  },
  dyplomas: {
    name: 'Дипломы и грамоты',
    cover: false,
    insideBlock: false
  },
  discountCards: {
    name: 'Дисконтные карты',
    cover: false,
    insideBlock: false
  },
  calendars: {
    name: 'Календари',
    cover: false,
    insideBlock: false
  },
  leaflets: {
    name: 'Листовки',
    cover: false,
    insideBlock: false
  },
  menus: {
    name: 'Меню',
    cover: false,
    insideBlock: false
  },
  stickers: {
    name: 'Наклейки и стикеры',
    cover: false,
    insideBlock: false
  },
  postcards: {
    name: 'Открытки',
    cover: false,
    insideBlock: false
  },
  invitations: {
    name: 'Приглашения',
    cover: false,
    insideBlock: false
  },
  giftSertificates: {
    name: 'Подарочные сертификаты',
    cover: false,
    insideBlock: false
  },
  tableTockers: {
    name: 'Тейблтокеры',
    cover: false,
    insideBlock: false
  },
  fliers: {
    name: 'Флаеры',
    cover: false,
    insideBlock: false
  },
  prices: {
    name: 'Ценники, бирки и ярлыки',
    cover: false,
    insideBlock: false
  },
  hangers: {
    name: 'Хенгеры',
    cover: false,
    insideBlock: false
  },
  shelfTockers: {
    name: 'Шелфтокеры',
    cover: false,
    insideBlock: false
  }
};

var formats = {
  print: ['Односторонняя 4+0', 'Двухсторонняя 4+4'],
  paper: ['A3', 'A4', 'A5', 'A6']
};

var types = {
  single: ['90', '120', '150 глянцевая', '160', '200', '350', 'лён', 'дизайнерская', 'калька', 'самоклеящаяся'],
  double: ['90', '120', '150 глянцевая', '160', '200', '350', 'лён', 'дизайнерская']
};

var lamination = {
  laminations: ['без ламинирования', 'матовая 32', 'матовая 80', 'матовая 200', 'глянцевая 32', 'глянцевая 80', 'глянцевая 200', 'soft touch']
};

var a3Size = 312*440;

angular.module('paper-config', [])
.constant('paperConfig', { products, formats, types, a3Size, lamination});
