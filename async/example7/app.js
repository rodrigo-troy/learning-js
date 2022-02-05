/*jshint esversion: 8 */
/* global console*/
let {
    cookBeans,
    steamBroccoli,
    cookRice,
    bakeChicken
} = require('./library.js');

async function serveDinnerAgain() {
    "use strict";
    let promisesArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

    console.log(`Dinner is served. We're having ${promisesArray[0]}, ${promisesArray[1]}, ${promisesArray[2]}, and ${promisesArray[3]}.`);
}

serveDinnerAgain();
