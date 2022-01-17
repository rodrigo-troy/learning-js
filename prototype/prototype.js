//Every Object is linked to a prototype object
/*jshint esversion: 6 */
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        "use strict";
        const F = function () {
        };

        F.prototype = o;

        return new F();
    };
}


const another_stooge = Object.create({});
