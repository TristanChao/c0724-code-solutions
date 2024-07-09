interface Order {
  itemNames: string[];
  numberOfItems: number;
  orderPlaced: string;
  delivered: boolean;
  deliveryDate?: string;
  shipTo: string;
  itemPrices: number[];
  orderTotal: number;
  orderNumber: string;
  returnWindowEnd: string;
  returnWindowClosed: boolean;
  bookAuthors?: string[];
}

const orderHistory: Order[] = [
  {
    itemNames: ['JavaScript for impatient programmers'],
    numberOfItems: 1,
    orderPlaced: 'Aug 4, 2020',
    delivered: true,
    deliveryDate: 'Aug 8, 2020',
    shipTo: 'JS Masher',
    itemPrices: [31.55],
    orderTotal: 34,
    orderNumber: '114-3941689-8772232',
    returnWindowEnd: 'Sep 7, 2020',
    returnWindowClosed: true,
    bookAuthors: ['Rauschmayer, Dr. Axel'],
  },

  {
    itemNames: ['The Timeless Way of Building'],
    numberOfItems: 1,
    orderPlaced: 'July 19, 2020',
    delivered: true,
    deliveryDate: 'July 20, 2020',
    shipTo: 'JS Masher',
    itemPrices: [41.33],
    orderTotal: 44.53,
    orderNumber: '113-9984268-1280257',
    returnWindowEnd: 'Aug 19, 2020',
    returnWindowClosed: true,
    bookAuthors: ['Alexander, Christopher'],
  },

  {
    itemNames: [
      'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    ],
    numberOfItems: 1,
    orderPlaced: 'July 4, 2020',
    delivered: true,
    deliveryDate: 'July 7, 2020',
    shipTo: 'JS Masher',
    itemPrices: [15.98],
    orderTotal: 17.22,
    orderNumber: '114-2875558-9059409',
    returnWindowEnd: 'Aug 5, 2020',
    returnWindowClosed: true,
  },

  {
    itemNames: [
      'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
      'The Art of Sql',
    ],
    numberOfItems: 2,
    orderPlaced: 'July 3, 2020',
    delivered: true,
    deliveryDate: 'July 5, 2020',
    shipTo: 'JS Masher',
    itemPrices: [94.95, 33.99],
    orderTotal: 138.93,
    orderNumber: '113-2883177-2648248',
    returnWindowEnd: 'Aug 4, 2020',
    returnWindowClosed: true,
    bookAuthors: ['n/a', 'Faroult, Stephane'],
  },
];
