'use strict'; // use this to prevent octal numbers/numbers with leading zeros being passed in the klingnum() function

function klingNum(num){
    if (typeof num !== 'number') {
        throw new TypeError('klingNum needs a number as input!');
    } else if ((num >= 10000000) || (num < 0)) {
        throw new Error('klingNum needs a number between 0 and 9.999.999');
    } 

    let string = num.toString(),
        numArray = num.toString().split(''),
        numbers, multipliers, chunk;

    console.log(numArray);

    // numbers 0-9
    numbers = ["pagh", "wa'", "cha'", "wej", "loS", "vagh", "jav", "Soch", "chorgh", "Hut"];

    // multipliers 0, 10, 100 --- 1000000 (one million)
    multipliers = ["", "maH", "vatlh", "SaD", "netlh", "bIp", "'uy'"];

    chunk = [];

    // is num zero?
    if (parseInt(string) === 0){
        return numbers[0];
    }

    for (var i = 0; i < numArray.length; i++) {
        chunk.push(numbers[numArray[i]] + multipliers[i]);
        console.log(string[i] + ' heeft als multiplier: ' + multipliers[i]);
    }

    console.log(chunk.join(' '));
};

// console.log(klingNum(0));
// console.log(klingNum(1));
console.log('klingNum: ' + klingNum(751751));
// console.log(klingNum(12));
// console.log('klingNum: ' + klingNum(123));
// console.log(klingNum(1234));
