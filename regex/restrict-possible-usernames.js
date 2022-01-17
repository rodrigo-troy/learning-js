let username = "JackOfAllTrades";
let userCheck = /^[a-z]+[0-9][0-9]+$|^[a-z][a-z]+[0-9]*$/i; // Change this line
let result = userCheck.test(username);


let userCheck2 = /^[a-z][a-z]+[0-9]*$/i;
console.log(userCheck2.test("aa"));
