/*jshint esversion: 8 */
/* global console*/
let {
    cookBeans,
    steamBroccoli,
    cookRice,
    bakeChicken
} = require('./library.js');

//In our serveDinner() function, each promise's asynchronous operation runs simultaneously.
async function serveDinner() {
    "use strict";
    let vegetablePromise = steamBroccoli();
    let starchPromise = cookRice();
    let proteinPromise = bakeChicken();
    let sidePromise = cookBeans();

    console.log(`Dinner is ready. We have ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();
