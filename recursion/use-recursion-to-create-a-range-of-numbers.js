function rangeOfNumbers(startNum, endNum) {
    console.log('0.- ' + startNum + ',' + endNum);

    if (startNum === endNum) {
        console.log('1.- ' + startNum + ',' + endNum);
        return [startNum];
    } else {
        console.log('2.- ' + startNum + ',' + endNum);
        var array = rangeOfNumbers(startNum + 1, endNum);
        array.unshift(startNum);

        return array;
    }
};
