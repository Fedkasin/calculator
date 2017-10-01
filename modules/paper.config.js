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

// var rates = {
//   '90': {
//     single: {
//       below10: 2.10,
//       bellow25: 1.35,
//       below50: 1.12,
//       below100: 0.99,
//       below200: 0.92,
//       below300: 0.87,
//       below500: 0.75,
//       below700: 0.58,
//       more700: 0.54
//     },
//     double: {
//       below10: 2.70,
//       bellow25: 1.66,
//       below50: 1.38,
//       below100: 1.22,
//       below200: 1.12,
//       below300: 1.07,
//       below500: 0.92,
//       below700: 0.87,
//       more700: 0.85
//     }
//   },
//   '120': {
//     single: 0,
//     double: 0
//   },
//   '150 глянцевая': {
//     single: 0,
//     double: 0
//   },
//   '160': {
//     single: 0,
//     double: 0
//   },
//   '200': {
//     single: 0,
//     double: 0
//   },
//   '350': {
//     single: 0,
//     double: 0
//   },
//   'лён': {
//     single: 0,
//     double: 0
//   },
//   'дизайнерская': {
//     single: 0,
//     double: 0
//   },
//   'калька': {
//     single: 0
//   },
//   'самоклеящаяся': {
//     single: 0
//   }
// };

angular.module('paper-config', [])
.constant('paperConfig', { formats, types, a3Size, lamination});
