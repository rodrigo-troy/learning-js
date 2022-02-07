/*jshint esversion: 6 */

/* global console*/
let isSuccess = true;

function loadNumber() {
    return new Promise(function (resolve, reject) {
        if (isSuccess) {
            resolve(1);
        } else {
            reject(2);
        }
    });
}


loadNumber()
    .then(function number1(value) {
        console.log(`number1(): ${value}`);
        return loadNumber();
    })
    .then(function number2(value) {
        console.log(`number2(): ${value}`);
        return loadNumber();
    })
    .then(function number3(value) {
        console.log(`number3(): ${value}`);
        return loadNumber();
    })
    .then(function number4(value) {
        isSuccess = false;
        console.log(`number4(): ${value}`);
        return loadNumber();
    })
    .then(function number5(value) {
        console.log(`number5(): ${value}`);
        return loadNumber();
    })
    .catch(function (error) {
        console.log(`error: ${error}`);
    })
    .finally(function () {
        console.log(`finally: 3`);
    });
