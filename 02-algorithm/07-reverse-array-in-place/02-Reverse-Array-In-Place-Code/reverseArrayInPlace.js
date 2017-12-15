const reverseArrayInPlace = (arr) => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const tempArr = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempArr;
    }

    return arr;
};
