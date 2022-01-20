/*jshint esversion: 6 */

/* global console*/
function largestOfFour(arr) {
  "use strict";
  let maxSubArray = [];

  for (let subArray of arr) {
    //console.log(subArray);
    let maxNumber;

    for (let number of subArray) {
      if (!maxNumber) {
        maxNumber = number;
      } else if (number > maxNumber) {
        maxNumber = number;
      }
    }

    maxSubArray.push(maxNumber);
  }

  console.log(maxSubArray);
  console.log('\n');

  return maxSubArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
