const width: number = 33;
const height: number = 87;
const area: number = width * height;
console.log('area:', area);
console.log('typeof area:', typeof area);

const bill: number = 90;
const payment: number = 100;
const change: number = payment - bill;
console.log('change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 100;
const midterm: number = 96;
const final: number = 82;
const grade: number = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'Tristan';
const lastName: string = 'Chao';
const fullName: string = firstName + ' ' + lastName;
console.log('fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 4;
const isAcidic: boolean = pH < 7;
console.log('isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount: number = 450;
const isSparta: boolean = headCount === 300;
console.log('isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('motto:', motto);
console.log('typeof motto:', typeof motto);
