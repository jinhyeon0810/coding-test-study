// 빈도수 세기 / 다중 포인터 - areThereDuplicates
// 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중
// 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.
// 빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.

// 예시:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// 제약 조건:
// Time - O(n)
// Space - O(n)

// 보너스:
// Time - O(n log n)
// Space - O(1)

//1. 포인터 방식 사용하여 구현
function areThereDuplicates(...args) {
  //정렬
  args.sort();

  let start = 0;
  let next = 1;
  [1, 1, 2, 3, 5];
  while (args.length > next) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }

  return false;
}

//2. 빈도수 세기 솔루션
function areThereDuplicates2(...args) {
  let object = {};
  for (let val of args) {
    object[val] = (object[val] ?? 0) + 1;
    if (object[val] > 1) return true;
  }
  return false;
}

//3. One Liner 솔루션
function areThereDuplicates3(...args) {
  return new Set(args).size !== args.length;
}

console.log("here", areThereDuplicates3(1, 2, 3, "A", "B"));
