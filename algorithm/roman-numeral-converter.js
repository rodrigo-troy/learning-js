function convertToRoman(num) {
    "use strict";
    //num = 2;
    console.log(`num: ${num}`);

    var translator = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let romArr = [];
    let unitArr = String(num)
        .split("")
        .reverse();

    console.log(unitArr);

    for (let i = 0; i < unitArr.length; i++) {
        let currNum = Number(unitArr[i]);
        //console.log(romArr);
        console.log(unitArr[i]);

        if (i === 3) {
            for (let j = 0; j < unitArr[i]; j++) {
                romArr.unshift('M');
            }
        } else if (i === 2) {
            if (currNum === 9) {
                romArr.unshift('CM');
            } else if (currNum === 5) {
                romArr.unshift('D');
            } else if (currNum === 4) {
                romArr.unshift('CD');
            } else if (currNum > 5 && currNum < 9) {
                for (let c = 0; c < currNum - 5; c++) {
                    romArr.unshift('C');
                }
                romArr.unshift('D');
            } else if (currNum <= 3) {
                for (let c = 0; c < currNum; c++) {
                    romArr.unshift('C');
                }
            }
        } else if (i === 1) {
            if (currNum === 9) {
                romArr.unshift('XC');
            } else if (currNum === 5) {
                romArr.unshift('L');
            } else if (currNum === 4) {
                romArr.unshift('XL');
            } else if (currNum > 5 && currNum < 9) {
                for (let c = 0; c < currNum - 5; c++) {
                    romArr.unshift('X');
                }
                romArr.unshift('L');
            } else if (currNum <= 3) {
                for (let c = 0; c < currNum; c++) {
                    romArr.unshift('X');
                }
            }
        } else if (i === 0) {
            if (currNum === 9) {
                romArr.unshift('IX');
            } else if (currNum === 5) {
                romArr.unshift('V');
            } else if (currNum === 4) {
                romArr.unshift('IV');
            } else if (currNum > 5 && currNum < 9) {
                for (let c = 0; c < currNum - 5; c++) {
                    romArr.unshift('I');
                }
                romArr.unshift('V');
            } else if (currNum <= 3) {
                for (let c = 0; c < currNum; c++) {
                    romArr.unshift('I');
                }
            }
        }
    }


    console.log(romArr.join(""));
    console.log('\n');

    return romArr.join("");
}

convertToRoman(649);
