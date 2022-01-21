/*jshint esversion: 6 */

/* global console*/
function rot13(str) {
    "use strict";
    console.log(str);

    let arr1 = str.split("");
    let arr2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let arr3 = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split("");
    let arr4 = [];

    console.log(arr1);

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        console.log(index)

        if (index >= 0) {
            arr4.push(arr3[index]);
        } else {
            arr4.push(arr1[i]);
        }
    }

    console.log(arr4.join(""));

    return arr4.join("");
}

rot13("OEBJA");
