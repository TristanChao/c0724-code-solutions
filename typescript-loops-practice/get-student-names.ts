/* exported getStudentNames */
interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const studentNames = [];
  for (let i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
