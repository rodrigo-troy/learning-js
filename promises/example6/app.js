/*jshint esversion: 6 */

/* global console*/
const onfulfilled = (response) => {
    "use strict";
    console.error(response);
};

const onRejected = (response) => {
    "use strict";
    console.error(response);
};

const onFinally = () => {
    "use strict";
    console.log("Done!");
};

function hasDownloaded(value) {
    "use strict";

    const executor = function (resolve, reject) {
        if (value === "true") {
            resolve("Now you can watch the video!");
        } else {
            reject("Oops! An error occurs");
        }
    };

    //then() and catch() return a Promise
    return new Promise(executor).then(onfulfilled)
                                .catch(onRejected)
                                .finally(onFinally);
}

hasDownloaded("true");
hasDownloaded("false");


