/*jshint esversion: 6 */

/* global console*/
function palindrome(str) {
    "use strict";
    const regex = /[^_(),-.\s]/;
    let arr = str.split("");
    arr = arr.map(i => i.toLowerCase()).filter(i => regex.test(i));
    console.log(arr);

    let newStr = arr.join("");
    let arrRev = arr.reverse();
    let strRev = arrRev.join("");
    console.log(arrRev);

    console.log(`str: ${str}`);
    console.log(`newStr: ${newStr}`);
    console.log(`strRev: ${strRev}`);
    console.log(`equal?  ${String(newStr) === String(strRev)}`);
    console.log(newStr.localeCompare(strRev, undefined, {sensitivity: 'accent'}) === 0);

    console.log(regex.test('i'));
    console.log('\n');
    return newStr === strRev;
}

palindrome("eye");
palindrome("natan");
