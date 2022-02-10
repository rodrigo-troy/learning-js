/*jshint esversion: 6 */

/* global console*/
let curried_add = a => b => a + b;

console.log(curried_add(10)(
    15));
