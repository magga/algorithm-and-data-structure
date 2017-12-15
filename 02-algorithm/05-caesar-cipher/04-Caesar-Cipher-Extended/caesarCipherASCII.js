const caesarCipherASCII = (str, num) => {
	if (num < 0)
		return caesarCipherASCII(str, num + 26);

	let output = '';

	for (var i = 0; i < str.length; i ++) {
		let c = str[i];

		if (c.match(/[a-z]/i)) {
			const code = str.charCodeAt(i);

			if ((code >= 65) && (code <= 90)) {
                c = String.fromCharCode(((code - 65 + num) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                c = String.fromCharCode(((code - 97 + num) % 26) + 97);
            }
		}

		output += c;
	}

	return output;
};

console.log(caesarCipherASCII('A Zoo Keeper', 2));
console.log(caesarCipherASCII('A Zoo Keeper', 3));
console.log(caesarCipherASCII('A Zoo Keeper', 4));
console.log(caesarCipherASCII('A Zoo Keeper', 5));
console.log(caesarCipherASCII('A Zoo Keeper', -6));
