/*jshint esversion: 6 */

/* global console*/
class X {
    get Y() {
        return 10;
    }

    get name() {
        return "I am X";
    }
}

const x = new X();
console.log(x.y);
console.log(x.name);

let y = [1, 2];
console.log(y.length);
y[100] = 10;
console.log(y.length);

const start = 1;

function setEnd() {
    const end = 10;
}

setEnd();
console.log(end);

