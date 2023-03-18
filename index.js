'use strict';

module.exports = (num) => {
    if (typeof num !== 'number' || typeof num === "undefined") {
        throw new TypeError('klingNum needs a number as input!');
    } else if (num >= 10000000 || num < 0) {
        throw new Error('klingNum can only handle numbers between 0 and 9,999,999');
    }
      
    // numbers 0-9
    const numbers = ["pagh", "wa'", "cha'", "wej", "loS", "vagh", "jav", "Soch", "chorgh", "Hut"];    
    // multipliers 0, 10, 100 ... 1000000 (one million)
    const multipliers = ["", "maH", "vatlh", "SaD", "netlh", "bIp", "'uy'"];

    let klingText = [];
    
    let numArray = [...num.toString()].map(Number);

    numArray.forEach((digit, index) => {
        klingText.push(numbers[digit] + multipliers[numArray.length - 1 - index]);
    });

    // if num is zero, return 'pagh', otherwise return klingText
    return num === 0 ? numbers[0] : klingText.join(' ');
}