const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let total = 0;
  array.forEach(index => total += index);
  return total;
};

const multiply = function (array) {
  let multiplied = 1;
  array.forEach(item => multiplied *= item);
  return multiplied;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  let counter = num - 1;
  let factorial = num;
  while (counter >= 1) {
    factorial *= counter;
    counter--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
