let first = 5;
let second = 7;
console.log(first, second); // return 5, 7
let temp = first;
first = second;
second = temp;
console.log(first, second); // return 7, 5

// destructuring
let num1 = 10;
let num2 = 20;
console.log(num1, num2); // return 10, 20
[num1, num2] = [num2, num1];
console.log(num1, num2); // return 20, 10
