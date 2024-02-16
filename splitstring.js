function splitString(str) {
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
        if (i + 1 < str.length) {
            result.push(str.slice(i, i + 2));
        } else {
            result.push(str.slice(i) + '_');
        }
    }
    return result;
}

console.log(splitString('abc'));      // Output: ['ab', 'c_']
console.log(splitString('abcdef'));   // Output: ['ab', 'cd', 'ef']
