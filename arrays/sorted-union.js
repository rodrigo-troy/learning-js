/*jshint esversion: 6 */

/* global console*/
function uniteUnique(arr) {
    "use strict";
    console.log(arguments);
    let newArr = [];
    let rawArr = [];

    for (let i = 0; i < arguments.length; i++) {
        rawArr.push(arguments[i]);
    }

    console.log(rawArr);

    rawArr = rawArr.flatMap(x => x);

    for (let item of rawArr) {
        if (newArr.indexOf(item) < 0) {
            newArr.push(item);
        }
    }

    console.log(`rawArr: ${rawArr}`);
    console.log(`newArr: ${newArr}\n`);
    return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
