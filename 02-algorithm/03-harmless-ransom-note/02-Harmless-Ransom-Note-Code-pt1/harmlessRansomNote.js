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

    console.log(magazineObj);
};

harmlessRansomNote('', 'This is all the magazine text in this magazine');
