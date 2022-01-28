/*jshint esversion: 6 */
//todo: check code
/* global console*/
function sumFibs(num) {
    "use strict";
    console.log(`num: ${num}`);
    let arr = fibsArr(num, []).filter(i => i % 2);

    let sum = arr.reduce((a, c) => {
        return a += c;
    }, 0);

    console.log(`sum: ${sum}`);
    console.log(arr);

    return sum;
}

function fibsArr(num, arr) {
    "use strict";
    //console.log(arr);

    if (arr.length === 0) {
        arr = [1, 1];
    }

    if (num === 1) {
        return [1];
    }

    if (arr[arr.length - 1] <= num &&
        (arr[arr.length - 1] + arr[arr.length - 2]) <= num) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

        return fibsArr(num, arr);
    } else {
        return arr;
    }
}

let sum = sumFibs(20);
console.log(sum);
