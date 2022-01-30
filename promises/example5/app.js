/*jshint esversion: 6 */

/* global console*/
const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
    "use strict";
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
    "use strict";
    console.log(rejectionReason);
};

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

const promiseArray = [checkSunglasses, checkPants, checkBags];

Promise.all(promiseArray)
       .then(onFulfill)
       .catch(onReject);

