const reverseWords = (string) => {
    const wordsArr = string.split(' ');
    let reversedWordsArr = [];

    wordsArr.map((word) => {
        let reversedWord = '';

        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        reversedWordsArr.push(reversedWord);
    });

    return reversedWordsArr.join(' ');
};

console.log(reverseWords('this is a string of words'));
console.log(reverseWords('Coding Javascript'));
