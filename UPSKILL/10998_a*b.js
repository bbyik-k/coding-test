let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('./data.txt').toString().split('\n');

let numList = input[0].split(' ');
let a = parseInt(numList[0]);
let b = parseInt(numList[1]);

console.log(a * b);

