/*jshint esversion: 6 */

/* global console*/
function buildChange(change, cidArr, changeArr) {
    //console.log(`pending change: ${change}`);
    "use strict";

    if (change <= 0) {
        return;
    }

    for (let c of cidArr) {
        //console.log(`${c.name}: c.amount: ${c.amount}; change: ${change}`);
        if (c.unit <= change && c.amount > 0) {
            // console.log(c);
            //console.log(`${c.name} yes (${c.unit})`);
            c.amount--;
            changeArr.push(c);
            //console.log(changeArr);
            return buildChange(Number(Number(change).toFixed(2) - Number(c.unit).toFixed(2)).toFixed(2), cidArr, changeArr);
        }
        //console.log(c);
    }
}

function formatChange(changeArr) {
    "use strict";
    let arr = [];

    for (let c of changeArr) {
        if (!arr.includes(c.name)) {
            arr.push(c.name);
        }
    }

    let arr1 = [];
    for (let c of arr) {
        arr1.push([c, 0]);
    }

    //console.log(arr1);

    for (let c of changeArr) {
        for (let a of arr1) {
            // console.log(a.name);
            if (a[0] === c.name) {
                a[1] = Number(a[1].toFixed(2)) +
                    Number(c.unit.toFixed(2));
            }
        }
    }

    //console.log(arr1);
    return arr1;
}

function getMyCid(arr) {
    "use strict";
    let newArr = [];
    let converter = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]];

    for (let i of arr) {
        let currencyUnit = i[0];

        for (let c of converter) {
            if (c[0] === currencyUnit) {
                //console.log(`${c[0]} availables: ${i[1]}`);
                //console.log(`${c[0]}: ${i[1]/c[1]}`);
                newArr.unshift({
                    "name": c[0],
                    "unit": c[1],
                    "amount": Math.ceil(i[1] / c[1]),
                });
            }
        }
    }

    return newArr;
}

function getStatus(changeArr, pendingChange, cidArr) {
    "use strict";
    //console.log(cidArr);
    //console.log(`pendingChange: ${pendingChange}`);

    let sum = changeArr.reduce((a, c) => {
        a += c[1];
        return a;
    }, 0);
    console.log(`sum: ${sum}`);

    if (sum < pendingChange) {
        return "INSUFFICIENT_FUNDS";
    }

    let empty = true;
    for (let i = 0; i < cidArr.length; i++) {
        // console.log(cidArr[i].amount);

        if (cidArr[i].amount > 0) {
            empty = false;
        }
    }

    //console.log(empty);
    if (empty) {
        return "CLOSED";
    }

    return "OPEN";
}

function formatClosedArr(changeArr, cidArr) {
    "use strict";
    let newArr = [];

    for (let cid of cidArr) {
        newArr.unshift([cid.name, 0]);
    }


    for (let a of newArr) {

        for (let j of changeArr) {
            if (a[0] === j[0]) {
                // console.log(j);
                a[1] = j[1];
            }
        }
    }

    return newArr;
}

function checkCashRegister(price, cash, cid) {
    "use strict";
    console.log(`price: ${price}`);
    console.log(`cash: ${cash}`);

    let changeDue = cash - price;
    let changeArr = [];
    let myCid = getMyCid(cid);
    //console.log(myCid);
    buildChange(changeDue, myCid, changeArr);
    changeArr = formatChange(changeArr);

    //changeArr.forEach(e => console.log(e))
    //console.log(`changeArr: ${JSON.stringify(changeArr)}`);

    let res = {};
    res.status = getStatus(changeArr, changeDue, myCid);

    if (res.status === 'OPEN') {
        res.change = changeArr;
    } else if (res.status === 'CLOSED') {
        res.change = formatClosedArr(changeArr, myCid);
    } else if (res.status === 'INSUFFICIENT_FUNDS') {
        res.change = [];
    }

    console.log(res);
    console.log('\n');

    return res;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
