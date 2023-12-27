let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('./data.txt').toString().split(' ');

let num1 = parseInt(input[0]);
let num2 = parseInt(input[1]);

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(parseInt(num1/num2));
console.log(num1%num2);