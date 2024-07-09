interface Item {
  name: string;
  price: number;
  bookAuthor?: string;
}

interface Order {
  items: Item[];
  numberOfItems: number;
  orderPlaced: string;
  delivered: boolean;
  deliveryDate?: string;
  shipTo: string;
  orderTotal: number;
  orderNumber: string;
  returnWindowEnd: string;
  returnWindowClosed: boolean;
}

const orderHistory: Order[] = [
  {
    items: [
      {
        name: 'JavaScript for impatient programmers',
        price: 31.55,
        bookAuthor: 'Rauschmayer, Dr. Axel',
      },
    ],
    numberOfItems: 1,
    orderPlaced: 'Aug 4, 2020',
    delivered: true,
    deliveryDate: 'Aug 8, 2020',
    shipTo: 'JS Masher',
    orderTotal: 34,
    orderNumber: '114-3941689-8772232',
    returnWindowEnd: 'Sep 7, 2020',
    returnWindowClosed: true,
  },

  {
    items: [
      {
        name: 'The Timeless Way of Building',
        price: 41.33,
        bookAuthor: 'Alexander, Christopher',
      },
    ],
    numberOfItems: 1,
    orderPlaced: 'July 19, 2020',
    delivered: true,
    deliveryDate: 'July 20, 2020',
    shipTo: 'JS Masher',
    orderTotal: 44.53,
    orderNumber: '113-9984268-1280257',
    returnWindowEnd: 'Aug 19, 2020',
    returnWindowClosed: true,
  },

  {
    items: [
      {
        name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        price: 15.98,
      },
    ],
    numberOfItems: 1,
    orderPlaced: 'July 4, 2020',
    delivered: true,
    deliveryDate: 'July 7, 2020',
    shipTo: 'JS Masher',
    orderTotal: 17.22,
    orderNumber: '114-2875558-9059409',
    returnWindowEnd: 'Aug 5, 2020',
    returnWindowClosed: true,
  },

  {
    items: [
      {
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        price: 94.95,
      },
      {
        name: 'The Art of Sql',
        price: 33.99,
        bookAuthor: 'Faroult, Stephane',
      },
    ],
    numberOfItems: 2,
    orderPlaced: 'July 3, 2020',
    delivered: true,
    deliveryDate: 'July 5, 2020',
    shipTo: 'JS Masher',
    orderTotal: 138.93,
    orderNumber: '113-2883177-2648248',
    returnWindowEnd: 'Aug 4, 2020',
    returnWindowClosed: true,
  },
];
