const repeatString = function (string, num) {
    let results = '';
    for (let i = 0; i < num; i++) {
        results += string;
    }
    if (num < 0) {
        return 'ERROR'
    }
    return results;
};

// Do not edit below this line
module.exports = repeatString;
