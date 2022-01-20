/*jshint esversion: 6 */

/* global console*/
function mutation(arr) {
    "use strict";
    let e1 = arr[0];
    let e2 = arr[1];

    console.log(e1);
    console.log(e2);

    let e2Arr = e2.split('');

    console.log(e2Arr);

    for (let letter of e2Arr) {
        console.log('letter: ' + letter + ' | ' + e1.indexOf(letter));
        if (e1.toUpperCase().indexOf(letter.toUpperCase()) < 0) {
            console.log(false);
            console.log('\n');

            return false;
        }
    }

    console.log(true);
    console.log('\n');

    return true;
}

mutation(["hello", "hey"]);
