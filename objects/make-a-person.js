/*jshint esversion: 6 */

/* global console*/
const Person = function (firstAndLast) {
    "use strict";
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let _firstName = firstAndLast.split(" ")[0];
    let _lastName = firstAndLast.split(" ")[1];

    this.getFullName = function () {
        return _firstName + " " + _lastName;
    };

    this.getFirstName = function () {
        return _firstName;
    };

    this.getLastName = function () {
        return _lastName;
    };

    this.setFirstName = function (first) {
        _firstName = first;
    };

    this.setLastName = function (last) {
        _lastName = last;
    };

    this.setFullName = function (firstAndLast) {
        _firstName = firstAndLast.split(" ")[0];
        _lastName = firstAndLast.split(" ")[1];
    };

    return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
