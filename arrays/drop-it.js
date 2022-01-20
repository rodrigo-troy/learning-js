/*jshint esversion: 6 */

/* global console*/
function dropElements(arr, func) {
    "use strict";
    console.log(`arr: ${arr}`);
    console.log(`func: ${func}`);

    let index = arr.findIndex(func);
    console.log(`index: ${index}`);

    if (index >= 0) {
        let newArr = arr.slice(index);
        console.log(`newArr: ${newArr}\n`);
        return newArr;
    } else {
        return [];
    }
}

dropElements([1, 2, 3, 4], function (n) {
    "use strict";
    return n < 2;
});
