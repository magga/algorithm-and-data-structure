const binarySearch = (numArray, key) => {
    const middleIdx = Math.floor(numArray.length / 2);
    const middleElem = numArray[middleIdx];
    
    if (middleElem === key) {
        return true;
    } else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    } else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else {
        return false;
    }
}
