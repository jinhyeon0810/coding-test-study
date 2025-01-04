// 정렬된 배열과 값을 받아들이고 값이 존재하는 경우 그 인덱스를 반환하는 binarySearch라는 함수를 작성합니다.
// 값이 존재하지 않으면 -1을 반환합니다.
// 이 알고리즘은 linearSearch 보다 더 효율적입니다
function binarySearch(arr, num) {
  let arrSorted = arr.sort((a, b) => a - b);

  let leftIdx = 0;
  let rightIdx = arrSorted.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = parseInt((leftIdx + rightIdx) / 2);
    if (arrSorted[middleIdx] === num) return middleIdx;
    else if (arrSorted[middleIdx] < num) leftIdx = middleIdx + 1;
    else if (arrSorted[middleIdx] > num) rightIdx = middleIdx - 1;
  }

  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));
//[1,2,3,4,5]
//L    M    R
