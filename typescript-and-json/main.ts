const books = [
  {
    isbn: '9780439023481',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    isbn: '9780439554930',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
  },
  {
    isbn: '9780007525508',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
  },
];

console.log('books:', books);
console.log('typeof books:', typeof books);

const booksJson = JSON.stringify(books);

console.log('booksJson:', booksJson);
console.log('typeof booksJson:', typeof booksJson);

const studentJson = '{"id": 858385, "name": "Tristan Chao"}';

console.log('studentJson:', studentJson);
console.log('typeof studentJson:', typeof studentJson);

const student = JSON.parse(studentJson);

console.log('student:', student);
console.log('typeof student:', typeof student);
