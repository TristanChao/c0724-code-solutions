function getRangeReport(start: number, end: number): object {
  let total = 0;
  const odds = [];
  const evens = [];
  const range = [];

  let count = 0;
  let average = 0;

  for (let i = start; i <= end; i++) {
    total += i;
    range.push(i);

    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }

    count++;
  }

  average = total / count;

  const rangeProperties = {
    total,
    odds,
    evens,
    range,
    average,
  };

  return rangeProperties;
}

console.log('getRangeReport(1, 10):', getRangeReport(1, 10));

console.log('getRangeReport(5, 15):', getRangeReport(5, 15));
