const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((item) => {
  console.log(item);
});

console.log('Reverse order:');
values.forEach((item, index) => {
  console.log(values[values.length - index - 1]);
});
