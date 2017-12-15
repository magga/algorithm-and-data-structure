const harmlessRansomNote = (noteText, magazineText) => {
    const noteArr = noteText.split(' ');
    const magazineArr = magazineText.split(' ');
    let magazineObj = {};

    magazineArr.map((word) => {
        if (!magazineObj[word]) {
            magazineObj[word] = 0;
        }

        magazineObj[word]++; 
    });

    let possible = true;

    noteArr.forEach((word) => {
        if (magazineObj[word] !== undefined) {
            if (magazineObj[word] < 1) {
                possible = false;
            }

            magazineObj[word]--;
        } else {
            possible = false;
        }
    });

    return possible;
};

const hasil = harmlessRansomNote(
    'this is a secret note for you from a secret admirer', 
    'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
);

console.log(hasil);
