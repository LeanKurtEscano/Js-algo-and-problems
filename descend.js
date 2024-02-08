function descendingOrder(n){
    //...
   const myNum = n.toString().split("");
   const descend = myNum.sort(a, b => b - a);
   const final = descend.join("");
   return final;

  }
  
  const Numbers = 123456;
 const result= descendingOrder(Numbers);

 console.log(result);