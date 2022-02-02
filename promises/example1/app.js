/*jshint esversion: 6 */

/* global console*/
const cookBeans = () => {
    "use strict";
    console.log('Starting cooking beans...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('beans');
        }, 1000);
    });
};

const steamBroccoli = () => {
    "use strict";
    console.log('Starting cooking broccoli...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('broccoli');
        }, 500);
    });
};

const cookRice = () => {
    "use strict";
    console.log('Starting cooking rice...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('rice');
        }, 2000);
    });
};

const bakeChicken = () => {
    "use strict";
    console.log('Starting cooking chicken...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('chicken');
        }, 5000);
    });
};

function getOnfulfilled() {
    "use strict";
    return data => {
        console.log(`The ${data} is done!`);
    };
}

bakeChicken()
    .then(getOnfulfilled());

cookRice()
    .then(getOnfulfilled());

cookBeans()
    .then(getOnfulfilled());

steamBroccoli()
    .then(getOnfulfilled());


