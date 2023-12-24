// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// ["1", "2"]

console.log(`input: ${input}`);
let line = input[0].split(' ');
let a = parseInt(line[0]); // 1
let b = parseInt(line[1]); // 2
console.log(a + b);