/*jshint esversion: 6 */

/* global console*/
const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
};

function getExecutor(order) {
    "use strict";
    return (resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    };
}

const checkInventory = (order) => {
    "use strict";
    return new Promise(getExecutor(order));
};

module.exports = {checkInventory};
