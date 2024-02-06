function sortByLength(arr) {
    // Use the sort() method with a custom comparator function
    return arr.sort(function(a, b) {
        return a.length - b.length;
    });
}

// Example usage:
var inputArray = ["Telescopes", "Glasses", "Eyes", "Monocles"];
var sortedArray = sortByLength(inputArray);

// Print the sorted array
console.log(sortedArray);

