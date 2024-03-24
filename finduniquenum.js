function findUniq(arr) {
    // do magic
   return arr.filter(number => number !== number);
  }
const numbers =  [ 1, 1, 1, 2, 1, 1 ];

  console.log(findUniq(numbers));