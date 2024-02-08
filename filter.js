function filter_list(l) {
   return l.filter(numOnly => typeof(numOnly) == 'number');
  }



  const numOnlyArr = [1,2,'a','b'];
  const result = filter_list(numOnlyArr);

  console.log(result);