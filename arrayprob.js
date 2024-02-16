let names = [];

function likes(names) {

  for( let i = 0; i < names.length ; i++){
    let arrayNum = names.length;
    let arrayNames =  names;
     if (arrayNum == 1){
      console.log(`${arrayNames} likes this`);
    } else if( arrayNum ==2){
      console.log (`${arrayNames[0]} and ${arrayNames[1]} likes this`);
    } else if (arrayNum == 3) {
      console.log(`${arrayNames[0]}, ${arrayNames[1]} and ${arrayNames[2]}`);
      
    } else if (arrayNum == 4 ) {
      console.log(`${arrayNames[0]}, ${arrayNames[1]} and 2 others like this`);
    } else if (arrayNum > 4){
        console.log(`${arrayNames[0]}, ${arrayNames[1]} and ${arrayNum++ - 2} others like this`);
    } else {
      console.log("No one likes this");
    }
  }
}

likes(names);