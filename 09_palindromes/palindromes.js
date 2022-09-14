const palindromes = function (string) {
    let punctuation = [',', ' ', '.', '!']
    let splitStr = string.toLowerCase().split('').filter(element => {
        if (punctuation.includes(element)) {
            return false;
        } else {
            return true;
        }
    });

    let reversed = []
    splitStr.forEach(element => {
        reversed.unshift(element);
    })
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] != reversed[i]) {
            return false;
        }

    }
    return true;
};
palindromes('racecar!');
// Do not edit below this line
module.exports = palindromes;
