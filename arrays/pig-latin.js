/*jshint esversion: 6 */

/* global console*/
function translatePigLatin(str) {
    "use strict";
    let arr = str.split(/([^\d\saeiou]+)/).filter(i => i);
    console.log(`arr: ${arr}`);

    if (str[0].match(/[^\d\saeiou]/)) {
        console.log(arr[0]);
        arr.push(arr.shift(), 'a', 'y');
    } else {
        arr.push('w', 'a', 'y');
    }

    console.log(arr.join(""));
    console.log("\n");

    return arr.join("");
}

translatePigLatin("consonant");
