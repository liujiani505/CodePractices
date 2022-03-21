function digitize(n) {
    const newArr = Array.from(String(n), Number)
    return newArr.reverse()
}

// another solution

// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }