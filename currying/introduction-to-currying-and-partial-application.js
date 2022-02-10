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

let xyz = add(10)(
    20)(
    30);
console.log(xyz);

let x = add(10);
const y = x(20);
const z = y(30);
console.log(z);


