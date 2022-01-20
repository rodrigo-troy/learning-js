/*jshint esversion: 6 */

/* global console*/
function fearNotLetter(str) {
    "use strict";
    let arr = 'abcdefghijklmnopqrstuvwxyz'.split("");
    //console.log(arr);

    for (let i = 0; i < str.length; i++) {
        console.log(`str[i]: ${str[i]}`);

        let index = arr.indexOf(str[i]);
        console.log(`index: ${index}`);

        if (i + 1 < str.length) {
            let next = arr[index + 1];
            console.log(`next: ${next}`);
            console.log();

            if (next !== str[i + 1]) {
                return next;
            }
        }
    }
}

fearNotLetter("abce");
