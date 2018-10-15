const calculator = require('./calculator_lib.js');
let sum = calculator.sum;
let difference = calculator.difference;
let product = calculator.product;
let quotient = calculator.quotient;
let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
console.log( "sum is :",sum(firstNumber,secondNumber));
console.log("difference is :",difference(firstNumber,secondNumber));
console.log("product is :",product(firstNumber,secondNumber));
console.log("quotient is :",quotient(firstNumber,secondNumber));


