function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    // Convert the input string to lowercase
    const lowercaseStr = str.toLowerCase();
  
    // Check if every letter in the alphabet is present in the input string
    for (let char of alphabet) {
      if (lowercaseStr.indexOf(char) === -1) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const exampleString = "The quick brown fox jumps over the lazy dog";
  console.log(isPangram(exampleString)); // Output