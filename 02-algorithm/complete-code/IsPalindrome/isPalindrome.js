const isPalindrome = (string) => {
    const lettersArr = string.toLowerCase().replace(/[^a-z]/g, '');
    let len = lettersArr.length - 1;

    for (let i = 0; i < len; i++) {
        // Uncomment to view the state for each loop
        // console.log(`i : ${i}`);
        // console.log(`len : ${len}`);
        // console.log(`lettersArr[i] : ${lettersArr[i]}`);
        // console.log(`lettersArr[len] : ${lettersArr[len]}`);
        // console.log(`====================================`);

        if (lettersArr[i] !== lettersArr[len]) {
            return false;
        }

        len--;
    }

    return true;
}

console.log(`Madam I'm Adam : ${isPalindrome("Madam, I'm Adam")}`);
console.log(`Race car : ${isPalindrome("Race car")}`);
console.log(`Kasur rusak : ${isPalindrome("Kasur rusak")}`);
console.log(`Algorithm and Data Structure : ${isPalindrome("Algorithm and Data Structure")}`);
