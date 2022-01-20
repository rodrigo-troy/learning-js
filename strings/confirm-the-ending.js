/*jshint esversion: 6 */

/* global console*/
function confirmEnding(str, target) {
    "use strict";
    let sArr = str.split('');
    let tArr = target.split('');

    let result = true;

    if (target.length === 1) {
        return target === sArr.pop();
    } else {
        console.log(sArr);
        console.log(tArr);
        for (let i = tArr.length; i > 0; i--) {
            console.log(tArr[tArr.length - i] + ' - ' + sArr[sArr.length - i]);

            if (tArr[tArr.length - i] !== sArr[sArr.length - i]) {
                return false;
            }
        }
    }

    return result;
}

console.log(confirmEnding("Bastian", "n"));
