/*jshint esversion: 6 */

/* global console*/
function mySuperFlatter(newArr, oldArr) {
    "use strict";
    for (let i = 0; i < oldArr.length; i++) {
        if (typeof oldArr[i] === 'number') {
            newArr.push(oldArr[i]);
        } else if (typeof oldArr[i] === 'string') {
            newArr.push(oldArr[i]);
        } else if (String(oldArr[i]) === '[object Object]') {
            newArr.push({});
        } else {
            mySuperFlatter(newArr, oldArr[i]);
        }
    }

    return newArr;
}

function steamrollArray(arr) {
    "use strict";
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i}: ${arr[i]}`);
    }

    let flat = mySuperFlatter([], arr);

    console.log(`flat: [${flat}]`);
    console.log('\n');

    return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
