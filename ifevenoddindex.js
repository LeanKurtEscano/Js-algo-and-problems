function sortMyString(S) {
  let isEven = '';
  let isOdd = '';

  for(let i = 0 ; i < S.length; i++){
    if(i % 2 === 0){
        isEven += S[i];
    }
    else {
        isOdd += S[i];
    }
  }

  return `${isEven} ${isOdd}`;
}

const inputStr = ["C","o","d","e","W","a","r","s"];
const result = sortMyString(inputStr);

console.log(result);