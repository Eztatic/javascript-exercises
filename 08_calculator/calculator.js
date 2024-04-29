const add = function(num1, num2) {
	return Number(num1) + Number(num2);
};

const subtract = function(num1, num2) {
	return Number(num1) - Number(num2);
};

const sum = function(arr) {
	let total = arr.reduce((initial, firstVal) => {
    return initial + firstVal;
  }, 0); 
  return total;
};

const multiply = function(arr) {
  let total = arr.reduce((initial, firstVal) => {
    return initial * firstVal;
  }, 1); 
  return total;
};

const power = function(num1, num2) {
  return Number(num1) ** Number(num2);
};

const factorial = function(num) {
  let temp = num;
	let array = [];
  for(let i = 1; i <= temp; i++) {
    array.push(num)
    num--;
  }
  let final = array.reduce((initial, firstval) => {
    return initial * firstval;
  }, 1);
  return final;
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
