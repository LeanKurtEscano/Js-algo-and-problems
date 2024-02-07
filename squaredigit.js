function squareDigits(num){
    const storNum = num.toString().split("");
    const numArr = storNum.map(num => num ** 2);
    const result = numArr.join("");
    const finalResult = parseInt(result, 10);
    return finalResult;


    return result;
    
  }

const myNum = 9119;
const probRes = squareDigits(myNum);

console.log(probRes)