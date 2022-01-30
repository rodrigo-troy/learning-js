/*jshint esversion: 6 */

/* global console*/
const {
    checkInventory,
    processPayment,
    shipOrder
} = require('./library.js');

const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
};

checkInventory(order)
    .then((resolvedValueArray) => {
        "use strict";
        // Write the correct return statement here:

    })
    .then((resolvedValueArray) => {
        "use strict";
        // Write the correct return statement here:

    })
    .then((successMessage) => {
        "use strict";
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        "use strict";
        console.log(errorMessage);
    });
