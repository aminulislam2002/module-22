// Math.pow()
const result = Math.pow(5, 3);
console.log(result); // return 125

// Math.abs()
const num1 = 25;
const num2 = 40;
const gap = Math.abs(num1 - num2); // Math.abs mane kno ekta man er main man ta newa seti posetive naki negative ta nibe na
console.log(gap); // return 15
if (gap < 5) {
  console.log("You guys can be friend!");
} else {
  console.log("You guys can not be friend!"); // its return
}

// Math.round()
const number1 = 2.45;
const fullNumber1 = Math.round(number1);
console.log(fullNumber1); // return 2

const number2 = 2.55;
const fullNumber2 = Math.round(number2);
console.log(fullNumber2); // return 3

// Math.ceil()
const number3 = 2.001;
const fullNumber3 = Math.ceil(number3);
console.log(fullNumber3); // return 3

// Math.floor()
const number4 = 2.789;
const fullNumber4 = Math.floor(number4);
console.log(fullNumber4); // return 2

// random()
const numbers = Math.round(Math.random() * 6);
console.log(numbers); // return any random number within 1 to 6
