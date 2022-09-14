const fibonacci = function (nth) {
    if (nth < 0) {
        return "OOPS";
    }
    let counter = 0;
    let array = [1]
    while (counter <= nth) {
        if (array.length < 2) {
            array.push(1);
        } else {
            array.push(array[counter - 1] + array[counter]);
        }
        counter++;
    }
    return array[Number(nth) - 1];
};

// Do not edit below this line
module.exports = fibonacci;
