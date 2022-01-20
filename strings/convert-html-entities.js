/*jshint esversion: 6 */

/* global console*/
function convertHTML(str) {
    "use strict";
    let newArr = [];
    let arr = str.split("");
    console.log(arr);

    for (let i of arr) {
        //console.log(i);

        if (i === '&') {
            newArr.push('&amp;');
        } else if (i === '<') {
            newArr.push('&lt;');
        } else if (i === '>') {
            newArr.push('&gt;');
        } else if (i === '"') {
            newArr.push('&quot;');
        } else if (i === "'") {
            newArr.push('&apos;');
        } else {
            newArr.push(i);
        }
    }

    //console.log(newArr);
    console.log(newArr.join(""));

    return newArr.join("");
}

convertHTML("Dolce & Gabbana");
