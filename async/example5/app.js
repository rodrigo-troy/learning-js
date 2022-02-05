/*jshint esversion: 8 */
/* global console*/
const cookBeanSouffle = require('./library.js');

async function hostDinnerParty() {
    "use strict";

    try {
        let dinner = await cookBeanSouffle();
        console.log(`${dinner} is served!`);
    } catch (error) {
        console.log(error);
        console.log('Ordering a pizza!');
    }
}

hostDinnerParty();

