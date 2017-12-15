const isPalindrome = (string) => {
    const lettersArr = string.toLowerCase().replace(/[^a-z]/g, '').split('');

    if (lettersArr.join('') === lettersArr.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

const hasil = isPalindrome("Madam, I'm Adam");

console.log(hasil);
