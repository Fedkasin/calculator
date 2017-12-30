var formats = {
    print: ['Односторонняя 4+0', 'Двухсторонняя 4+4'],
    paper: ['A3', 'A4', 'A5', 'A6', 'свой размер']
};

var types = {
    single: ['90', '120', '150 глянцевая', '160', '200', '350', 'лён', 'дизайнерская', 'калька', 'самоклеящаяся'],
    double: ['90', '120', '150 глянцевая', '160', '200', '350', 'лён', 'дизайнерская']
};

var lamination = {
    laminations: ['нет', 'матовая 32', 'матовая 80', 'матовая 200', 'глянцевая 32', 'глянцевая 80', 'глянцевая 200', 'soft touch']
};

var bounding = ['нет', 'есть (диаметр 45мм)'];

var perforation = ['нет', '1 биг', '2 бига', '3 бига', '4 бига', '5 бигов'];

var changingData = ['нет', '1 типа', '2 типа', '3 типа'];

var a3Size = 312*440;

var products = {
  posters: {
    name: 'Афиши',
    fields: {
      count: {
        enabled: true,
        title: 'Количество:'
      },
      size:{
        enabled: true,
        title: 'Размер:',
        options: ['A3', 'A4', 'свой размер']
      },
      printFormat: {
        enabled: true,
        title: 'Цветность:',
        options: ['Односторонняя 4+0', 'Двухсторонняя 4+4']
      },
      paperFormat: {
        enabled: true,
        title: 'Бумага:',
        options: types
      },
      lamination: {
        enabled: true,
        title: 'Ламинация:',
        options: lamination.laminations
      },
      bounding: {
        enabled: true,
        title: 'Скругление углов:',
        options: bounding
      },
      perforation: {
        enabled: false,
        title: 'Перфорация / биговка:'
      },
      changingData: {
        enabled: false,
        title: 'Переменные данные:'
      }
    }
  },
  tickets: {
    name: 'Билеты',
    fields: {
      count: {
          enabled: true,
          title: 'Количество:'
      },
      size:{
          enabled: true,
          title: 'Размер:',
          options: ['99x210', '90x50', 'A5', 'свой размер']
      },
      printFormat: {
          enabled: true,
          title: 'Цветность:',
          options: ['Односторонняя 4+0', 'Двухсторонняя 4+4']
      },
      paperFormat: {
          enabled: true,
          title: 'Бумага:',
          options: types
      },
      lamination: {
          enabled: true,
          title: 'Ламинация:',
          options: lamination.laminations
      },
      bounding: {
          enabled: true,
          title: 'Скругление углов:',
          options: bounding
      },
      perforation: {
          enabled: true,
          title: 'Перфорация / биговка:',
          options: perforation
      },
      changingData: {
          enabled: true,
          title: 'Переменные данные:',
          options: changingData
      }
    }
  },
  blanks: {
    name: 'Бланки',
    fields: {
      count: {
          enabled: true,
          title: 'Количество:'
      },
      size:{
          enabled: true,
          title: 'Размер:',
          options: formats.paper
      },
      printFormat: {
          enabled: true,
          title: 'Цветность:',
          options: formats.print
      },
      paperFormat: {
          enabled: true,
          title: 'Бумага:',
          options: types
      },
      lamination: {
          enabled: false,
          title: 'Ламинация:',
          options: lamination.laminations
      },
      bounding: {
          enabled: false,
          title: 'Скругление углов:',
          options: bounding
      },
      perforation: {
          enabled: false,
          title: 'Перфорация / биговка:',
          options: perforation
      },
      changingData: {
          enabled: false,
          title: 'Переменные данные:',
          options: changingData
      }
    }
  },
  brochures: {
    name: 'Брошюры',
      cover: true,
      insideBlock: true,
    fields: {
      count: {
          enabled: true,
          title: 'Количество:'
      },
      size:{
          enabled: true,
          title: 'Размер:',
          options: formats.paper
      },
      printFormat: {
          enabled: true,
          title: 'Цветность:',
          options: formats.print
      },
      paperFormat: {
          enabled: true,
          title: 'Бумага:',
          options: types
      },
      lamination: {
          enabled: true,
          title: 'Ламинация:',
          options: lamination.laminations
      },
      bounding: {
          enabled: true,
          title: 'Скругление углов:',
          options: bounding
      },
      perforation: {
          enabled: false,
          title: 'Перфорация / биговка:',
          options: perforation
      },
      changingData: {
          enabled: false,
          title: 'Переменные данные:',
          options: changingData
      }
    }
  },
  journals: {
    name: 'Журналы',
    cover: true,
    insideBlock: true,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: formats.paper
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: formats.print
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  catalogs: {
    name: 'Каталоги',
    cover: true,
    insideBlock: true,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: formats.paper
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: formats.print
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  notepads: {
    name: 'Блокноты',
    cover: true,
    insideBlock: true,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A4', 'A5', 'A6']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Односторонняя 1+0', 'Двухсторонняя 4+4', 'Двусторонняя 4+1', 'Двусторонняя 1+1']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: false,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  booklets: {
    name: 'Буклеты',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A4', 'A5', 'A6', 'Евро 210х99']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Односторонняя 1+0', 'Двусторонняя 4+1', 'Двусторонняя 1+1']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: false,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: true,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  cards: {
    name: 'Визитки',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['90×50']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  voblers: {
    name: 'Воблеры',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['100x100', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  warrantyCoupons: {
    name: 'Гарантийные талоны',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A4', 'A5', 'A6', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4', 'Двусторонняя 4+1', 'Двусторонняя 1+1']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: false,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: true,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  dyplomas: {
    name: 'Дипломы и грамоты',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A3', 'A4', 'A5', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4', 'Двусторонняя 4+1', 'Двусторонняя 1+1']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: false,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: true,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  discountCards: {
    name: 'Дисконтные карты',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['90x50', '85x55']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  calendars: {
    name: 'Календари',
    cover: false,
    insideBlock: false
  },
  leaflets: {
    name: 'Листовки',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A3', 'A4', 'A5', 'A6', 'Евро 210х99', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4', 'Двусторонняя 4+1', 'Двусторонняя 1+1']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  menus: {
    name: 'Меню',
    cover: false,
    insideBlock: false
  },
  stickers: {
    name: 'Наклейки и стикеры',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A3', 'A4', 'A5', 'A6', '50x90', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Односторонняя 1+0']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  postcards: {
    name: 'Открытки',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A4', 'A5', 'A6', 'Евро 210х99', 'Двойная евро 210х210', '100x150', '150x150', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: true,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  invitations: {
    name: 'Приглашения',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A4', 'A5', 'A6', 'Евро 210х99', 'Двойная евро 210х210', '100x150', '150x150', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: true,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  giftSertificates: {
    name: 'Подарочные сертификаты',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A3', 'A4', 'A5', 'A6', 'Евро 210х99', 'Двойная евро 210х210', '150x150', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: true,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  tableTockers: {
    name: 'Тейблтокеры',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A4', 'A5', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: false,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: true,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  fliers: {
    name: 'Флаеры',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['A3', 'A4', 'A5', 'A6', 'Евро 210х99', 'Двойная евро 210х210', '150x150', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4', 'Двусторонняя 4+1', 'Двусторонняя 1+1']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: true,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  prices: {
    name: 'Ценники, бирки и ярлыки',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['50x50', '50x90', '70x100', 'Евро 210х99', 'Двойная евро 210х210', '100x150', '150x150', 'свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0', 'Двусторонняя 4+4', 'Двусторонняя 4+1', 'Двусторонняя 1+1']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: true,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: true,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  hangers: {
    name: 'Хенгеры',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['90x200']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Двусторонняя 4+4']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: false,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  },
  shelfTockers: {
    name: 'Шелфтокеры',
    cover: false,
    insideBlock: false,
      fields: {
          count: {
              enabled: true,
              title: 'Количество:'
          },
          size:{
              enabled: true,
              title: 'Размер:',
              options: ['свой размер']
          },
          printFormat: {
              enabled: true,
              title: 'Цветность:',
              options: ['Односторонняя 4+0']
          },
          paperFormat: {
              enabled: true,
              title: 'Бумага:',
              options: types
          },
          lamination: {
              enabled: true,
              title: 'Ламинация:',
              options: lamination.laminations
          },
          bounding: {
              enabled: false,
              title: 'Скругление углов:',
              options: bounding
          },
          perforation: {
              enabled: false,
              title: 'Перфорация / биговка:',
              options: perforation
          },
          changingData: {
              enabled: false,
              title: 'Переменные данные:',
              options: changingData
          }
      }
  }
};

angular.module('paper-config', [])
.constant('paperConfig', { products, formats, types, a3Size, lamination});
