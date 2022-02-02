/*jshint esversion: 6 */

/* global console*/
const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
};

const myExecutor = (resolve, reject) => {
    "use strict";
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
};

const orderSunglasses = () => {
    "use strict";
    return new Promise(myExecutor);
};

orderSunglasses()
    .then((val) => {
        "use strict";
        console.log(val);
    })
    .catch((val) => {
        "use strict";
        console.log(val);
    });
