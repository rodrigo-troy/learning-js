/*jshint esversion: 6 */

/* global console*/
const {
    checkAvailability,
    onReject,
    onFulfill
} = require('./library.js');

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');
const promiseArray = [checkSunglasses, checkPants, checkBags];

Promise.all(promiseArray)
       .then(onFulfill)
       .catch(onReject);

