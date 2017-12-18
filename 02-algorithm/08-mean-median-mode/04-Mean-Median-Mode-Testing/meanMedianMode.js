const meanMedianMode = (array) => {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}

const getMean = (array) => {
    let sum = 0;

    array.forEach(num => {
        sum += num;
    });

    const mean = sum / array.length;
    return mean;
}

const getMedian = (array) => {
    array.sort((a, b) => a - b);

    let median;

    if (array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)];
    }
    else {
        const mid1 = array[(array.length / 2) - 1];
        const mid2 = array[array.length / 2];
        median = (mid1 + mid2) / 2;
    }

    return median;
}

const getMode = (array) => {
    var modeObj = {};
    
    // create modeObj
    array.forEach(num => {
        if (!modeObj[num]) {
            modeObj[num] = 0;
        }

        modeObj[num]++;
    });
    
    // create array of mode/s 
    var maxFrequency = 0;
    var modes = [];
    for (let num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        }
        else if (modeObj[num] === maxFrequency) {
            modes.push(num);
        }
    }

    // if every value appears same amount of times 
    if (modes.length === Object.keys(modeObj).length) {
        modes = [];
    }

    return modes;
}

console.log(meanMedianMode([9,10,23,10,23,9,9,10]));
