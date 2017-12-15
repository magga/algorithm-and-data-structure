const isPalindrome = (string) => {
    const lettersArr = string.toLowerCase().replace(/[^a-z]/g, '').split('');

    if (lettersArr.join('') === lettersArr.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(`Madam I'm Adam : ${isPalindrome("Madam, I'm Adam")}`);
console.log(`Race car : ${isPalindrome("Race car")}`);
console.log(`Kasur rusak : ${isPalindrome("Kasur rusak")}`);
console.log(`Algorithm and Data Structure : ${isPalindrome("Algorithm and Data Structure")}`);
