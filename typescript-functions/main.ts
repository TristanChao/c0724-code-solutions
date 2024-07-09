function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('convertMinutesToSeconds(17):', convertMinutesToSeconds(17));

function greet(name: string): string {
  return 'Hey ' + name + '!';
}
console.log("greet('Tristan'):", greet('Tristan'));

const getArea = (width: number, height: number): number => width * height;
console.log('getArea(13, 5):', getArea(13, 5));

interface Person {
  firstName: string;
  lastName: string;
}
const getFirstName = (person: Person): string => person.firstName;
console.log(
  "getFirstName({ firstName: 'Tristan', lastName: 'Chao' }):",
  getFirstName({ firstName: 'Tristan', lastName: 'Chao' })
);

const getLastElement = (array: unknown[]): unknown => array[array.length - 1];
console.log(
  "getLastElement(['Billy', 'Bob', 'Joe']):",
  getLastElement(['Billy', 'Bob', 'Joe'])
);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
console.log(
  'callOtherFunction(convertMinutesToSeconds, 34):',
  callOtherFunction(convertMinutesToSeconds, 34)
);
