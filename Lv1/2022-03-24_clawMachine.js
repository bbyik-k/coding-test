const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const board2 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 5],
  [0, 3, 2, 0, 1],
  [4, 3, 4, 4, 3],
  [5, 2, 1, 5, 1]
];
// const moves2 = [1, 5, 1, 3, 2, 1, 2];
const moves2 = [2, 2, 2, 3, 2, 1, 2];


function solution(board, moves) {
  let answer = 0;
  let basket = [];
  moves.forEach(move => {
    for (let row of board) {
      console.log(`row[${move-1}]: ${row[move - 1]}`);
      if (row[move - 1] !== 0) {
        if (row[move - 1] === basket[basket.length - 1]) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(row[move - 1]);
        }
        row[move - 1] = 0;
        break;
      }
    }
  });

  return answer;
}
console.log(solution(board2, moves2));