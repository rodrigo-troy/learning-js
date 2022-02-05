/*jshint esversion: 8 */
/* global console*/
const {
    shopForBeans,
    soakTheBeans,
    cookTheBeans
} = require('./library.js');

// Write your code below:

async function makeBeans() {
    "use strict";
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
}

makeBeans();
