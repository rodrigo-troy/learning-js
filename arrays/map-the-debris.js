/*jshint esversion: 6 */

/* global console*/
function orbitalPeriod(arr) {
    "use strict";
    console.log(arr);

    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    let a = 2 * Math.PI;
    let newArr = [];

    let getOrbPeriod = function (obj) {
        var c = Math.pow(earthRadius + obj.avgAlt, 3);
        var b = Math.sqrt(c / GM);
        var orbPeriod = Math.round(a * b);
        // create new object
        return {name: obj.name, orbitalPeriod: orbPeriod};
    };

    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}

orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}]);
