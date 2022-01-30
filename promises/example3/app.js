/*jshint esversion: 6 */

/* global console*/
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];
const order2 = [['pants', 1]];

function handleSuccess(value) {
    "use strict";
    console.log(value);
}

function handleFailure(value) {
    "use strict";
    console.log(value);
}

checkInventory(order)
    .then(handleSuccess, handleFailure);

checkInventory(order2)
    .then(handleSuccess)
    .catch(handleFailure);
