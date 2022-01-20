/*jshint esversion: 6 */

/* global console*/
function diffArray(arr1, arr2) {
    "use strict";
    console.log(`arr1: [${arr1}]`);
    console.log(`arr2: [${arr2}]`);

    const newArr = [];

    for (let item1 of arr1) {
        if (arr2.indexOf(item1) < 0) {
            newArr.push(item1);
        }
    }

    for (let item2 of arr2) {
        if (arr1.indexOf(item2) < 0) {
            newArr.push(item2);
        }
    }

    console.log(newArr);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
