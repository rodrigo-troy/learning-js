/*jshint esversion: 6 */

/* global console*/
function whatIsInAName(collection, source) {
    "use strict";
    const arr = [];
    const matchArr = Object.getOwnPropertyNames(source);

    console.log(`collection:`);
    for (let item of collection) {
        console.log(item);
    }
    console.log(`source: [${JSON.stringify(source)}]`);
    console.log(`matchArr: [${matchArr}]\n`);

    // Only change code below this line
    for (let item of collection) {
        let matchAll = true;

        for (let theMatch of matchArr) {
            if (item[theMatch] !== source[theMatch]) {
                matchAll = false;
            }
        }

        if (matchAll) {
            arr.push(item);
        } else {
            console.log(`item: ${JSON.stringify(item)} does not match!`);
        }
    }

    console.log(`\nResult:`);
    for (let item of arr) {
        console.log(item);
    }
    console.log('\n\n');

    // Only change code above this line
    return arr;
}

whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"});
