//기준점 간 이동배열 패턴
//-> 배열의 특정 기준점을 중심으로 값을 이동하거나,
// 특정 조건에 따라 재배열하는 알고리즘 패턴임
//-> 정렬, 슬라이딩 윈도우, 투 포인터 등 호율적인 데이터 재구성을 목표로함

//1. 이중 for 문 사용의 경우 시간복잡도 O(N^2)
//num개의 연속된 값의 합의 최댓값 구하기
function maxSubbarraySum(arr, num) {
  let max = -Infinity;
  let temp;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}

console.log(maxSubbarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//2. 시간 복잡도 O(N)
