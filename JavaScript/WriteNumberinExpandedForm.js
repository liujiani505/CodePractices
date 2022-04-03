// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript


function expandedForm(num) {
    const numString =num.toString().split('')
    console.log(numString)
    let newString = []
     for (let i = 0; i < numString.length; i++){
        if(numString[i] !== "0"){
          if( i < numString.length -1){
          newString.push(numString[i] * (Math.pow(10, numString.length-i-1)))
        } else{
          newString.push(numString[numString.length-1]) 
        }
      } 
     }
  
       return newString.join(' + ')
  }

  
console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
  