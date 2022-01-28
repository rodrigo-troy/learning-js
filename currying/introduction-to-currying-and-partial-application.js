/*jshint esversion: 6 */

/* global console*/
function add(x) {
    "use strict";
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}

let x = add(10)(20)(30);
console.log(x);
