function solution(board, moves) {
  var stock = new Array;
  var loss = 0;

  for (var i = 0; i < moves.length; i++) {
    var location = moves[i] - 1;
    for (var k = 0; k < 5; k++) {
      if (board[k][location] > 0) {
        var doll = board[k][location];
        stock.push(doll);
        board[k][location] = 0;
        break;
      }

      if (stock.length > 1) {
        var last = stock[stock.length - 1];
        var last_before = stock[stock.length - 2];
        if (last == last_before) {
          stock.pop();
          stock.pop();
          console.log("stock === " + stock);

          loss = loss + 2
        }

      }

    }

  }
  console.log("stock2 === " + stock);


  var answer = loss;
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));