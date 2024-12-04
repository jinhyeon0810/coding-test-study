//시간 복잡도 O(N^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}
[1, 2, 3], [1, 4, 9];

//배열로 접근이 아닌, key와value를 가진 객체로 데이터를 전처리 후 비교
//초기 배열의 value값이 key로 들어가고, 배열 내의 value (중복)갯수를 객체의 value로 지정해준다.
//예시 [1,2,3,2]의 경우 {1:1, 2:2, 3:1}가 된다.

//same함수 기능을 2중 loop가 아닌, 단일 loop로 개선, 시간 복잡도 O(N)
function optimizeSame(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  //counter1[val] 와 counter2[val] 의 값이 같아야한다.
  for (let key in counter1) {
    if (!(key ** 2) in counter2) return false;

    if (counter1[key] !== counter2[key ** 2]) return false;
  }

  return true;
}

console.log(optimizeSame([1, 2, 3, 2], [1, 4, 9, 1]));

/* for ...of 문법과 for ...in 문법의 차이점
for of 의 경우 배열, 문자열, Map, Set 등 iterable 객체를 순회할 때 사용됩니다.
for in 의 경우 객체(object)의 속성(key값)을 순회할 때 사용됩니다. */
