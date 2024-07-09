/* exported getDescriptionOfPerson */
interface Person {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getDescriptionOfPerson(person: Person): string {
  const description: string = `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
  return description;
}
