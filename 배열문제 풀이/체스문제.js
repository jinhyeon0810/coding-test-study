//2. 체스세트 : [1,1,2,2,2,8] 과 비교하여 각 index 마다 얼마만큼 부족/과잉 되었는지 나타내주는 배열만들기

//내가 작성한 코드
function answer(chess) {
  let result = [];

  let value = [1, 1, 2, 2, 2, 8];
  for (let i = 0; i < chess.length; i++) {
    result[i] = value[i] - chess[i];
  }

  return result;
}

chess = [0, 1, 2, 2, 2, 7];
console.log(answer(chess));
