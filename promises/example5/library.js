/*jshint esversion: 6 */

/* global console*/
const checkAvailability = (itemName, distributorName) => {
    "use strict";
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`);
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};

function restockSuccess() {
    "use strict";
    return (Math.random() > 0.2);
}


const onFulfill = (itemsArray) => {
    "use strict";
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
    "use strict";
    console.log(rejectionReason);
};

module.exports = {
    checkAvailability,
    onFulfill,
    onReject
};
