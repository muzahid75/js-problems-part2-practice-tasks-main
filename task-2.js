const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function findLongestWord(num) {
    let longestWord = '';

    // Loop through each word in the array
    for (let number of num) {
        if (number.length > longestWord.length) {
            longestWord = number;
        }
    }

    return longestWord;
}

// Example usage
const input = findLongestWord(heights2);
console.log(input);


