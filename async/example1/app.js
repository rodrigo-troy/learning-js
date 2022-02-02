/*jshint esversion: 8 */

/* global console*/
const {
    getExecutor,
    onfulfilledForWithAsync,
    onfulfilledForWithConstructor
} = require('./library.js');

const withConstructor = (num) => {
    "use strict";
    return new Promise(getExecutor(num));
};

withConstructor(0)
    .then(onfulfilledForWithConstructor);

withConstructor(1)
    .then(onfulfilledForWithConstructor);

//async functions always return a promise.
//An async function will return in one of three ways:
//1. If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
//2. If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
//3. If a promise is returned from the function, it will simply return that promise.
//In the example below, we returned a promise with a resolved value of an Array.
const withAsync = async (num) => {
    "use strict";
    if (num === 0) {
        return [num, 'zero'];
    } else {
        return [num, 'not zero'];
    }
};

withAsync(0)
    .then(onfulfilledForWithAsync);

withAsync(1)
    .then(onfulfilledForWithAsync);
