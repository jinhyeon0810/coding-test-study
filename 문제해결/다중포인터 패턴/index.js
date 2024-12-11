//다중포인터개념
//인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에따라
//중간지점에서부터 시작 or 끝 지점이나 양쪽 지점향해 이동시키는것

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
