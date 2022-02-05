/*jshint esversion: 8 */
/* global console*/
let cookBeans = () => {
    "use strict";
    console.log('Cooking beans...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('beans');
        }, 1300);
    });
};

let steamBroccoli = () => {
    "use strict";
    console.log('Steaming broccoli...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('broccoli');
        }, 2000);
    });
};

let cookRice = () => {
    "use strict";
    console.log('Cooking rice...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('rice');
        }, 1500);
    });
};

let bakeChicken = () => {
    "use strict";
    console.log('Baking chicken...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('chicken');
        }, 3500);
    });
};

module.exports = {
    cookBeans,
    steamBroccoli,
    cookRice,
    bakeChicken
};
