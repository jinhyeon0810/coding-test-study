function answer(mark) {
  let result = 0;

  let score = 0;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) {
      result = result + ++score;
    } else {
      score = 0;
    }
  }

  return result;
}

let mark = [1, 0, 1, 1, 1, 0, 1, 1, 0, 0];

console.log(answer(mark));
