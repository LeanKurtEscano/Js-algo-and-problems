 function isSquareNumber(n){
    const sqrt = Math.sqrt(n);
    const result = sqrt % n ===n ? true : false;
    return result;
  }

console.log(isSquareNumber(25)); 
console.log(isSquareNumber(14));