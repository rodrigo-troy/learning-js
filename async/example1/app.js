/*jshint esversion: 8 */

/* global console*/

function getExecutor(num) {
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

const withConstructor = (num) => {
    "use strict";

    return new Promise(getExecutor(num));
};

const onfulfilledForWithConstructor = (resolveValue) => {
    "use strict";
    console.log(`withConstructor(${resolveValue[0]}) returned a promise which resolved to: ${resolveValue[1]}.`);
};

withConstructor(0)
    .then(onfulfilledForWithConstructor);

withConstructor(1)
    .then(onfulfilledForWithConstructor);

const withAsync = async (num) => {
    "use strict";
    if (num === 0) {
        return [num, 'zero'];
    } else {
        return [num, 'not zero'];
    }
};

const onfulfilledForWithAsync = (resolveValue) => {
    "use strict";
    console.log(`withAsync(${resolveValue[0]}) returned a promise which resolved to: ${resolveValue[1]}.`);
};

withAsync(0)
    .then(onfulfilledForWithAsync);

withAsync(1)
    .then(onfulfilledForWithAsync);
