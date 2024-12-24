//다중포인터개념
//배열이나 문자열 등의 순차적인 데이터에서 두개 이상의 포인터(인덱스)를 이용하여
//문제를 효율적으로 해결하는 알고리즘 패턴

//보통 한쌍의 값이나 조건을 만족하는 무엇인가를 찾음
//example
//배열 내부에 한 숫자와 다른숫자를 더하면 0이되는 쌍을 찾으시오.
function solution(arr) {
  //O(N^2)방식
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

console.log("시간 복잡도 O(N^2)", solution([-3, -2, -1, 0, 1, 2, 3]));

//개선된 함수
function improvedSolution(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    let sum = arr[leftIdx] + arr[rightIdx];
    if (sum === 0) return [arr[leftIdx], arr[rightIdx]];
    else if (sum > 0) rightIdx -= 1;
    else leftIdx += 1;
  }
}
console.log("시간 복잡도 O(N)", improvedSolution([-3, -2, -1, 0, 1, 2, 3]));

//다중포인터 countUniqueValue
//정렬된 배열을 받아들이고 배열의 고유 값을 세는 함수 구현
function countUniqueValue(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
