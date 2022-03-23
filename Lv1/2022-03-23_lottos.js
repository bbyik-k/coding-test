function solution(lottos, win_nums) {
  let answer = [];
  const MAX_RANK = 7;
  const zeroCnt = lottos.filter(lottoNum => 0 === lottoNum).length;
  const correctCnt = lottos.filter(lottoNum => win_nums.includes(lottoNum)).length;

  let min = MAX_RANK - correctCnt > 6 ? 6 : MAX_RANK - correctCnt;
  let max = min - zeroCnt < 1 ? 1 : min - zeroCnt;

  answer = [max, min];
  return answer;
}


// const lottos = [44, 1, 0, 0, 31, 25];
const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, win_nums));