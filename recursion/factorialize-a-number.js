/*jshint esversion: 6 */
function factorialize(num) {
    "use strict";
    if (num === 1 || num === 0) {
        return 1;
    }
    return factorialize(num - 1) * num;
}

factorialize(5);
