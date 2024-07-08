interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Tristan',
  lastName: 'Chao',
  age: 20,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = "Kids' Factory Leader";
console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);

console.log('student:', student);
console.log('typeof student:', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
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

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Willow',
  kind: 'cat',
};

delete pet.name;
delete pet.kind;
console.log('pet:', pet);
console.log('typeof pet:', typeof pet);
