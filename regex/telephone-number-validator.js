/*jshint esversion: 6 */

/* global console*/
function telephoneCheck(str) {
    "use strict";
    console.log(str);

    let regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/;
    console.log(regex.test(str));

    let arr = str.match(/[()]/g);
    console.log(arr);
    let result = regex.test(str) && (arr ? arr.length % 2 === 0 : true);
    console.log(result);

    return result;
}

telephoneCheck("1 555-555-5555");
