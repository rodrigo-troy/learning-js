/*jshint esversion: 6 */

/* global console*/
function myReplace(str, before, after) {
    "use strict";
    console.log(`str: ${str}`);
    console.log(`before: ${before}`);
    console.log(`after: ${after}`);

    if (before.match(/[A-Z]/)) {
        after = after[0].toUpperCase() + after.substring(1);
    } else {
        after = after[0].toLowerCase() + after.substring(1);
    }

    console.log(`after: ${after}`);

    let newStr = str.replace(before, after);

    console.log(`newStr: ${newStr}\n`);

    return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
