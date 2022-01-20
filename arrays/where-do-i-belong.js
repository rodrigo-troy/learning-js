/*jshint esversion: 6 */

/* global console*/
function getIndexToIns(arr, num) {
    "use strict";
    let index = 0;

    console.log("arr: " + arr);
    console.log("num: " + num);

    arr.forEach((item, i) => {
        console.log("item: " + item + " | index: " + i);
        if (item < num) {
            console.log("here!");
            index++;
        }
    });

    console.log(index);
    console.log('\n');

    return index;
}

getIndexToIns([40, 60], 50);
