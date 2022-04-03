function invert(array) {
    return array.map((num)=>{
      return num >= 0 ? -Math.abs(num) : Math.abs(num)
    });
 }


// function invert(array) {
//  return array.map( x => x === 0 ? x : -x);
// }


