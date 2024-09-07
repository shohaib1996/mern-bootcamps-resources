const age = 20; //global variable

function showAge() {
  let age = 25; //scoped variable
  //   console.log(`My age is: ${age}`);
}

showAge();

//bad practice
const x = 20;
const y = 30;

//good practic
const number1 = 20;
const number2 = 30;

/**
 * @description - adding two values and returning
 * @param {number} num1 - The first number to add
 * @param {number} num2 - The second number to add
 * @returns {number} - The sum of two numbers
 */

//good practice
function addNumber(num1, num2) {
  return num1 + num2;
}

console.log(addNumber(number1, number2));
