function countPositivesSumNegatives(input) {
    return (input && input.length)
     ? input.reduce(([pSum, nSum], curr) => [pSum += (curr >= 1 && 1), nSum + Math.min(0, curr)], [0, 0])
     : [];
 }