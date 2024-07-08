'use strict';
const student = {
  firstName: 'Tristan',
  lastName: 'Chao',
  age: 20,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = "Kids' Factory Leader";
console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);
console.log('student:', student);
console.log('typeof student:', typeof student);
const vehicle = {
  make: 'Lexus',
  model: 'CT200h',
  year: 2011,
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log("vehicle['color']:", vehicle['color']);
console.log("vehicle['isConvertible]:", vehicle['isConvertible']);
console.log('vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);
const pet = {
  name: 'Willow',
  kind: 'cat',
};
delete pet.name;
delete pet.kind;
console.log('pet:', pet);
console.log('typeof pet:', typeof pet);
