/*jshint esversion: 8 */

/* global console*/

const onfulfilled1 = (resolveValue) => {
    "use strict";
    console.log(`withConstructor(${resolveValue[0]}) returned a promise which resolved to: ${resolveValue[1]}.`);
};

const withConstructor = (num) => {
    "use strict";

    let executor = (resolve, reject) => {
        if (num === 0) {
            let newVar = [num, 'zero'];
            resolve(newVar);
        } else {
            let newVar = [num, 'not zero'];
            resolve(newVar);
        }
    };

    return new Promise(executor);
};

withConstructor(0)
    .then(onfulfilled1);

withConstructor(1)
    .then(onfulfilled1);

const onfulfilled2 = (resolveValue) => {
    "use strict";
    console.log(`withAsync(${resolveValue[0]}) returned a promise which resolved to: ${resolveValue[1]}.`);
};

const withAsync = async (num) => {
    "use strict";
    if (num === 0) {
        return [num, 'zero'];
    } else {
        return [num, 'not zero'];
    }
};

withAsync(100)
    .then(onfulfilled2);

withAsync(1)
    .then(onfulfilled2);
