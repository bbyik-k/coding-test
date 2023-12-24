// readline 모듈 보다는 fs 이용

let fs = require('fs')
let input = fs.readFileSync('data.txt').toString().split('\n');
console.log(input);

// fs (file system) 제한  시

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let rl_input = [];
rl.on('line', function(line) {
  //콘솔 입력 창에서 줄바꿈 (Enter)를 입력할 때마다 호출
  rl_input.push(line);
}).on('close', function() {
  //콘솔 입력 창에서 Ctrl + c 혹은 Ctrl + D 를 입력하면 호출 (입력의 종료)
    console.log(rl_input);
    process.exit();
}); 


/*
reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환합니다.
reducer의 형태: (accumulator, currentValue) => (반환값)
- 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당합니다.
- 반환값은 그 이후의 원소에 대하여 accumulator에 저장됩니다.
*/
let data = [5, 2, 9, 8, 4];
// minValue 구하기 예제
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue); // 2
// 원소의 합계 구하기 예제
let summary = data.reduce((a, b) => a + b);
console.log(summary); // 28

// 길이가 5이고 모든 원소의 값이 0인 배열 초기화
let arr = new Array(5).fill(0);

let mySet = new Set(); // 집합 객체 생성
// 여러 개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);
// 원소 5 제거
mySet.delete(5);
// 원소를 하나씩 출력
for (let item of mySet) console.log(item);

// 특정 실수에 대하여 toFixed()를 이용해 소수점 아래 둘째 자리까지 출력
let x = 123.456;
console.log(x.toFixed(2));

/**
 * 이스케이프 시퀀스
 *  \t 탭
 * \\ 역 슬래시
 * \” 큰 따옴표
 */

