/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const oddEven = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEven.push('even');
    } else {
      oddEven.push('odd');
    }
  }
  return oddEven;
}
