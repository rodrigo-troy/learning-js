/*jshint esversion: 6 */

/* global console*/
function rangeOfNumbers(startNum, endNum) {
    "use strict";
    console.log('0.- ' + startNum + ',' + endNum);

    if (startNum === endNum) {
        console.log('1.- ' + startNum + ',' + endNum);
        return [startNum];
    } else {
        console.log('2.- ' + startNum + ',' + endNum);
        let array = rangeOfNumbers(startNum + 1, endNum);
        array.unshift(startNum);

        return array;
    }
}
