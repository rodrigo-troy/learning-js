/*jshint esversion: 6 */

/* global console*/
function pairElement(str) {
    "use strict";
    console.log(str);

    let arr = [];
    let myArr = str.split("");
    console.log(`myArr: ${myArr}`);

    for (let i of myArr) {
        console.log(i);

        if (i === 'G') {
            arr.push(['G', 'C']);
        } else if (i === 'C') {
            arr.push(['C', 'G']);
        } else if (i === 'A') {
            arr.push(['A', 'T']);
        } else if (i === 'T') {
            arr.push(['T', 'A']);
        }
    }

    console.log(arr);

    return arr;
}

pairElement("GCGAAAATCT");
