const harmlessRansomNote = (noteText, magazineText) => {
    // 03-06
    // Change all the char to lowercase
    //   --> "this" and "This" will be the same word
    // Remove all the char except alphanumeric
    //   --> ignore all the punctuation
    const noteArr = noteText.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ');
    const magazineArr = magazineText.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ');
    let magazineObj = {};

    magazineArr.map((word) => {
        if (!magazineObj[word]) {
            magazineObj[word] = 0;
        }

        magazineObj[word]++; 
    });

    // 03-06
    // Use for loop instead of map/forEach so that we can use "break"
    // We don't have to loop all the note if in the middle of the loop,
    //   we find that the magazine won't be able to fulfill the note words
    for (let i = 0; i < noteArr.length; i++) {
        const word = noteArr[i];
    
        if (magazineObj[word] !== undefined) {
            if (magazineObj[word] < 1) {
                return false;
            }

            magazineObj[word]--;
        } else {
            return false;
        }
    }

    return true;
};

const hasil = harmlessRansomNote(
    'This is a secret note for you from a secret admirer. You are the best', 
    'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
);

console.log(hasil);
