function solution(array) {
  let result = 0;

  let arraySum = array.reduce((acc, cur) => {
    return acc + cur;
  });

  let arrayAverage = arraySum / array.length;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > arrayAverage) {
      result = result + array[i] - arrayAverage;
    }
  }
  return result;
}

let array = [12, 8, 10, 11, 9, 5, 8];

console.log(solution(array));
