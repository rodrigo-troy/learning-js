/*jshint esversion: 8 */
/* global console*/
const shopForBeans = require('./library.js');

function getBeans() {
    "use strict";
    console.log(`1. Heading to the store to buy beans...`);
    let value = shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

async function getBeansAsync() {
    "use strict";
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

let pepe;
let beansAsync = getBeansAsync();
console.log(pepe && typeof pepe.then === 'function');
console.log(beansAsync && typeof beansAsync.then === 'function');
