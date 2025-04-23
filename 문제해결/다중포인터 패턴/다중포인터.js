// 다중 포인터 - averagePair
// averagePair라는 함수를 작성합니다. 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다. 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.

// 보너스 제약조건:

// Time: O(N)

// Space: O(1)

// 예시 인풋:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair() {
  //풀이법 : 정렬된 배열을 받음
  //첫번째 인덱스(좌측)와 마지막 인덱스(우측)를 더하고
  //평균값과 크기를 비교하여, 더 커져야할경우 좌측인덱스 값을 올리고(오름차순 정렬)
  //더 작아져야할 경우 우측 인덱스 값을 줄여서(오름차순정렬)
  //평균값과 같은 값이 존재하는지 계속확인~
  //시간복잡도 O(N)임
  //공간복잡도 O(1)임
}

function isSubsequence(string1, string2) {
  for (let val of string1) {
    let idx = string2.indexOf(val);
    if (idx === -1) return false;
    string2 = string2.slice(idx + 1, string2.length);
  }

  return true;
}
//위의 구조는 테스트케이스는 성립하나 시간복잡도가 for문 안에 slice와 indexOf가 존재하여 O(n * m) 케이스
//위를 다중 포인트 방법으로 개선해보면

function isSubsequenceSolution(string1, string2) {
  if (!string1) return false;

  let i = 0;
  let j = 0;

  while (j < string2.length) {
    if (string1[i] === string2[j]) i++;
    if (i === string1.length) return true;
    j++;
  }
  return false;
}

const s1 = "a".repeat(5000);
const s2 = "a".repeat(100000);

console.time("fast Version");
isSubsequenceSolution(s1, s2);
console.timeEnd("fast Version");

console.time("Slow Version");
isSubsequence(s1, s2);
console.timeEnd("Slow Version");
