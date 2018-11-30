module.exports = (num) => {
    if (typeof num !== 'number') {
        throw new TypeError('klingnum needs a number as input!')
    } else if(num >= 10000000 && num < 0) {
        throw new Error('klingnum needs a number between 0 and 9.999.999')
    }

    const numbers = ["pagh", "wa'", "cha'", "wej", "loS", "vagh", "jav", "Soch", "chorgh", "Hut"];
    const multipliers = ["", "maH", "vatlh", "SaD", "netlh", "bIp", "'uy'"];

    var numArray = num.toString().split('');
    console.log(numArray);
}