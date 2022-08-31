const removeFromArray = function (...params) {
    let array = params[0];
    let newArray = [];

    array.forEach((item) => {
        if (!params.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
