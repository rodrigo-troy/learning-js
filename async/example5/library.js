/*jshint esversion: 8 */
/* global console*/

let randomSuccess = () => {
    "use strict";
    return Math.random() < 0.5;
};

let cookBeanSouffle = () => {
    "use strict";
    return new Promise((resolve, reject) => {
        console.log('Fingers crossed... Putting the Bean Souffle in the oven');
        setTimeout(() => {
            let success = randomSuccess();
            if (success) {
                resolve('Bean Souffle');
            } else {
                reject('Dinner is ruined!');
            }
        }, 1000);
    });
};

module.exports = cookBeanSouffle;
