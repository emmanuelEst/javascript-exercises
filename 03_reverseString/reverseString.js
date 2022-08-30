const reverseString = function (string) {
    let splitArray = string.split('');
    let finalArray = [];
    for (let i = 0; i < splitArray.length; i++) {
        finalArray.unshift(splitArray[i]);
    }
    return finalArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
