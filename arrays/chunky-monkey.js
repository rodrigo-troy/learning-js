/*jshint esversion: 6 */

/* global console*/
function chunkArrayInGroups(arr, size) {
    "use strict";
    console.log(`arr: ${arr} | size: ${size}`);

    let myArr = [];
    let count = 0;

    let mySubArr = [];
    for (let item of arr) {
        if (count < size) {
            mySubArr.push(item);
            count++;
        } else {
            myArr.push(mySubArr);
            mySubArr = [];
            mySubArr.push(item);
            count = 1;
        }

        console.log(`item: ${item} | count: ${count} | mySubArr: ${mySubArr}`);
    }

    myArr.push(mySubArr);

    console.log(myArr);
    console.log('\n');

    return myArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
