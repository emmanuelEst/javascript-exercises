const findTheOldest = function (array) {
    let oldest;
    let age = 0;
    let elementAge;
    array.forEach(element => {
        if ('yearOfDeath' in element) {
            elementAge = element.yearOfDeath - element.yearOfBirth;
        } else {
            let currentYear = new Date().getFullYear();
            elementAge = currentYear - element.yearOfBirth;
        }
        console.log(elementAge);
        if (elementAge > age) {
            age = elementAge
            oldest = element;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
