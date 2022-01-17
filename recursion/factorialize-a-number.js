/*jshint esversion: 6 */

/* global console*/
function factorialize(num) {
    "use strict";
    if (num === 1 || num === 0) {
        return 1;
    }
    return factorialize(num - 1) * num;
}

console.log(factorialize(5));
