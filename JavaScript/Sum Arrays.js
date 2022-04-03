// Sum Numbers
function sum (numbers) {
    if (numbers.length > 0) {
      const sum = numbers.reduce((a, b) => a + b, 0)
      return sum;
    } else {
      return 0;
    }
};
