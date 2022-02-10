/*jshint esversion: 6 */

/* global console*/
function range(min, max) {
    "use strict";
    var arr = [];
    for (var i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

function gcd(a, b) {
    "use strict";
    return !b ? a : gcd(b,
                        a % b);
}

function lcm(a, b) {
    "use strict";
    return (a * b) / gcd(a,
                         b);
}

function smallestCommons(arr) {
    "use strict";
    let num1 = arr[0];
    let num2 = arr[1];

    var multiple = arr[0] < arr[1] ? arr[0] : arr[1];
    range(arr[0] < arr[1] ? arr[0] : arr[1],
          arr[0] < arr[1] ? arr[1] : arr[0])
        .forEach(function (n) {
            multiple = lcm(multiple,
                           n);
        });

    return multiple;
}

smallestCommons([1, 5]);
