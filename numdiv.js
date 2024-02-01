function divisibleBy(numbers, divisor){
   return numbers.filter(number => number % divisor === 0);

 }

 let num1 = [1,2,3,4,5,6];
 let num2 = 2;
 let result = divisibleBy(num1,num2)
console.log(result)