/*jshint esversion: 8 */

/* global console*/
const brainstormDinner = require('./library.js');

function nativePromiseDinner() {
    "use strict";
    brainstormDinner()
        .then((meal) => {
            console.log(`I'm going to make ${meal} for dinner.`);
        });
}

async function announceDinner() {
    "use strict";
    return await brainstormDinner()
        .then((meal) => {
            console.log(`I'm going to make ${meal} for dinner.`);
        });
}

let promise = announceDinner();
console.log("Thinking about it...");
promise.then(() => {
    "use strict";
    console.log("Done!");
});


