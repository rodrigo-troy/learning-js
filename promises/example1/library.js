/*jshint esversion: 6 */

/* global console*/
const cookBeans = () => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('beans');
        }, 1000);
    });
};

const steamBroccoli = () => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('broccoli');
        }, 1000);
    });
};

const cookRice = () => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('rice');
        }, 1000);
    });
};

const bakeChicken = () => {
    "use strict";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('chicken');
        }, 1000);
    });
};

module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken};

bakeChicken()
    .then(data => {
        "use strict";
        console.log(data);
    });


