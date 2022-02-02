/*jshint esversion: 8 */

/* global console*/
function getExecutor(num) {
    "use strict";
    return (resolve, reject) => {
        if (num === 0) {
            let newVar = [num, 'zero'];
            resolve(newVar);
        } else {
            let newVar = [num, 'not zero'];
            resolve(newVar);
        }
    };
}

const onfulfilledForWithConstructor = (resolveValue) => {
    "use strict";
    console.log(`withConstructor(${resolveValue[0]}) returned a promise which resolved to: ${resolveValue[1]}.`);
};

const onfulfilledForWithAsync = (resolveValue) => {
    "use strict";
    console.log(`withAsync(${resolveValue[0]}) returned a promise which resolved to: ${resolveValue[1]}.`);
};

module.exports = {
    onfulfilledForWithAsync,
    onfulfilledForWithConstructor,
    getExecutor
};

