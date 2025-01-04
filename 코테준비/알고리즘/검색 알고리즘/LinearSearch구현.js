// Linear Search 연습배열과 값을 받아들이고 그 값이 배열 안에 존재하는 경우
// 그 인덱스(0, 1, 2, ... 중 몇 번째에 위치하는지)를 반환하는 linearSearch라는 함수를 작성합니다.
// 값이 배열 안에 존재하지 않으면 -1을 반환합니다. indexOf 사용X
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([10, 15, 20, 25, 30], 15));
