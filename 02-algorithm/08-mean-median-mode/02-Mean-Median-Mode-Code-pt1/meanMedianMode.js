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
