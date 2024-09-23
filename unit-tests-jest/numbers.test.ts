import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

test('filters array to only contain even numbers', () => {
  expect(evenNumbers([4.4, 8, 19, 7])).toStrictEqual([8]);
});

test('converts a number into $#.## format', () => {
  expect(toDollars(5.3333333)).toBe('$5.33');
});

test('divides each number in an array (first arg) by the divisor (second arg)', () => {
  expect(divideBy([4, 5, 6, 7, 8], 2)).toStrictEqual([2, 2.5, 3, 3.5, 4]);
});

test('in an object (1st arg) all numerical values are multiplied by multiplier (2nd arg)', () => {
  const test = { first: 2, second: 'eight', third: 9 };
  const expected = { first: 6, second: 'eight', third: 27 };
  expect(multiplyBy(test, 3)).toStrictEqual(expected);
});
