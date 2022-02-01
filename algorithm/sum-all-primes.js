/*jshint esversion: 8 */

/* global console*/
function sumPrimes(num) {
    "use strict";
    console.log(`num: ` + num);
    let arr = [];

    for (let i = 2; i <= num; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            console.log(`i: ${i} | j:${j} | ${i % j}`);
            if (i % j === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            arr.push(i);
        }
    }

    console.log(arr);

    let sum = arr.reduce((a, c) => {
        return a + c;
    }, 0);
    console.log(`sum: ${sum}\n`);

    return sum;
}

sumPrimes(100);
