/*jshint esversion: 6 */

/* global console*/
function spinalCase(str) {
    "use strict";
    console.log(str);

    let myArr = str.split(/([-_\s]|(?=[A-Z][^A-Z)]))/);
    console.log(myArr);

    myArr = myArr.map(item => item.toLowerCase().trim().replace(/[-_]/i, '')).filter(item => item);
    console.log(myArr);

    let newStr = myArr.join('-');
    console.log(newStr);
    console.log('\n');

    return newStr;
}

spinalCase('This Is Spinal Tap');
