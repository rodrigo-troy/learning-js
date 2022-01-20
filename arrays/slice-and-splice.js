/*jshint esversion: 6 */

/* global console*/
function frankenSplice(arr1, arr2, n) {
    "use strict";
    let myArr1 = [...arr1];
    let myArr2 = [...arr2];

    console.log('\n');
    console.log(n);
    console.log("arr1: " + arr1);
    console.log("arr2: " + arr2);

    for (let i = 0; i < arr1.length; i++) {
        //console.log(myArr2);
        myArr2.splice(n + i, 0, myArr1[i]);
    }

    //console.log(arr2);
    console.log("resultado: " + myArr2);

    return myArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
