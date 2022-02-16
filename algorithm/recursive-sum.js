/*jshint esversion: 8 */

/* global console*/
function sum(n) {
    if (n === 1) {
        return 1;
    } else {
        return sum(n - 1) + n;
    }
}

console.log(sum(3));
