/*jshint esversion: 6 */

/* global console*/
function chunkArrayInGroups(arr, times) {
    "use strict";
    let a = [...arr];
    console.log(`myArr: ${a}`);

    for (let j = 0; j < times; j++) {
        let x = a[0];

        for (let i = 0; i < a.length; i++) {
            a[i] = a[i + 1];
        }

        a[a.length - 1] = x;
    }

    console.log(`result: ${a}`);
}

chunkArrayInGroups([7, 1, 9, 6, 10, 5, 8, 2, 3, 4],
                   5);

