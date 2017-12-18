const twoSum = (numArray, sum) => {
    let pairs = [];
    let hashTable = [];
   
    for (let i = 0; i < numArray.length; i++) {
        const currNum = numArray[i];
        const counterpart = sum - currNum;
        if (hashTable.indexOf(counterpart) !== -1) {
            pairs.push([ currNum, counterpart ]);
        }
        hashTable.push(currNum);
    }
    
    return pairs;
}
