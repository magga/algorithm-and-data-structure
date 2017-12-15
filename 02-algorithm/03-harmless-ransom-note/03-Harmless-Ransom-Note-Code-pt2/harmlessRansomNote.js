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

harmlessRansomNote('', 'This is all the magazine text in this magazine');
