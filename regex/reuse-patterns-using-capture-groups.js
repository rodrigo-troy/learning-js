let repeatNum = "42 42 42";
let reRegex = /^(\d{2,3}) \1 \1$/g; // Change this line
let result = repeatNum.match(reRegex);

//console.log(result);
console.log("42 42 42 42".match(reRegex));