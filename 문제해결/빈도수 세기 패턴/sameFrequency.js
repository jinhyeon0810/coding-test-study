// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때,
// 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
// 여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:

// Time: O(N)
// 예시 인풋:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(integer1, integer2) {
  //자릿수(숫자길이)가 같아야함
  if (String(integer1).length !== String(integer2).length) return false;

  const object1 = {};
  const object2 = {};

  //각 자릿수의 값이 양쪽 모두 존재
  for (let value of String(integer1)) {
    object1[value] = value ? value : 0 + 1;
  }

  for (let value of String(integer2)) {
    object2[value] = value ? value : 0 + 1;
  }

  for (let key in object1) {
    if (object2[key] !== object1[key]) return false;
  }

  for (let key in object2) {
    if (object2[key] !== object1[key]) return false;
  }

  return true;
}

console.log("result", sameFrequency(22, 222));
