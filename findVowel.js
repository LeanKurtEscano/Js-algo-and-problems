function disemvowel(str) {
    let vowels = 'aeiouAEIOU';
    let filtSentence = vowels.split('');

    let filterStr = "";
    for(let i = 0 ; i < mySentence.length; i++){
        const myStr = str[i]

        if(!filtSentence.includes(myStr)){
            filterStr += myStr;
        }
         
    }

    return filterStr;
}

const mySentence = "sdmlkkokqslma owkqkwpqkwpmsa oqqkss";
console.log(disemvowel(mySentence));