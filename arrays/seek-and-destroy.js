/*jshint esversion: 6 */

/* global console*/
function destroyer(arr) {
  "use strict";
  //console.log(arguments);
  let arr1 = [];

  for (let i = 1; i < arguments.length; i++) {
    arr1.push(arguments[i]);
  }

  console.log(arr1);

  let newArr = [];

  for (let item of arr) {
    if (arr1.indexOf(item) < 0) {
      newArr.push(item);
    }
  }

  console.log(newArr);

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
