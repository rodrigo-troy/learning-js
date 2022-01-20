/*jshint esversion: 6 */

/* global console*/
let cookBeans = () => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('beans');
        }, 1000);
    });
};

let steamBroccoli = () => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('broccoli');
        }, 1000);
    });
};

let cookRice = () => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('rice');
        }, 1000);
    });
};

let bakeChicken = () => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("chicken");
            resolve('chicken');
        }, 1000);
    });
};

module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken};

bakeChicken();
