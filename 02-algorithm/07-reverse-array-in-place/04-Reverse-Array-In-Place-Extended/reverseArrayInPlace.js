const reverseArrayInPlace = (arr) => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        arr[i] += arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i] - arr[arr.length - 1 - i];
        arr[i] -= arr[arr.length - 1 - i];
    }

    return arr;
};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]));
