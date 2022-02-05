/*jshint esversion: 8 */
/* global console*/
let cookBeans = () => {
    "use strict";
    console.log('Cooking beans...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('beans');
        }, 1000);
    });
};

let steamBroccoli = () => {
    "use strict";
    console.log('Steaming broccoli...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('broccoli');
        }, 1000);
    });
};

let cookRice = () => {
    "use strict";
    console.log('Cooking rice...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('rice');
        }, 1000);
    });
};

let bakeChicken = () => {
    "use strict";
    console.log('Baking chicken...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('chicken');
        }, 1000);
    });
};

module.exports = {
    cookBeans,
    steamBroccoli,
    cookRice,
    bakeChicken
};
