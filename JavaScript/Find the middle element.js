function gimme (triplet) {
    const sortedArr = [...triplet].sort((a, b) => a-b)
    return triplet.indexOf(sortedArr[1])
  }
  
  // sort() changes the original array. The filter() function creates a filtered copy, leaving the original intact


// simplified version

const gimme = function (triplet) {
    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
};