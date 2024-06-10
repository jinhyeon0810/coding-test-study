//1.선택정렬 함수
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    //자리를 바꿈
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

//1-1 선택정렬 연습 : i번째 값을 j번째(>i) 값과 비교하여 작은값을 왼쪽으로 위치시키는 정렬
function selectionSort1(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[minIndex] > arr1[j]) {
        let temp = arr1[minIndex];
        arr1[minIndex] = arr1[j];
        arr1[j] = temp;
      }
    }
  }
  return arr1;
}

//2. 버블정렬 함수
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

//2-1 버블정렬 함수 연습 : 인접한 두 수를 비교하여 오른쪽에 큰값 배치
function bubbleSort1(bubbleArr) {
  for (let i = bubbleArr.length - 1; i > 0; i--) {
    for (let j = 0; j < bubbleArr.length - 1; j++) {
      if (bubbleArr[j] > bubbleArr[j + 1]) {
        let temp = bubbleArr[j];
        bubbleArr[j] = bubbleArr[j + 1];
        bubbleArr[j + 1] = temp;
      }
    }
  }
  return bubbleArr;
}

//3.삽입정렬 함수
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}

//3-1 삽입정렬 연습
function insertionSort1(insertArr) {
  for (let i = 1; i < insertArr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (insertArr[j] < insertArr[j - 1]) {
        const temp = insertArr[j - 1];
        insertArr[j - 1] = insertArr[j];
        insertArr[j] = temp;
      } else break;
    }
  }
  return insertArr;
}
let insertArr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

//4.정수에 대한 오름차순 정렬 예시
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

function compare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}

arr.sort(compare);

console.log(arr);

//별도로 비교함수를 사용하지 않으면 유니코드 순으로 정렬됨

let arr2 = ["fineapple", "banana", "durian", "apple", "carrot"];
arr2.sort();

//병합정렬
//병합하는 함수
function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left; //결과 배열의 인덱스
  let sorted = [];
  while (i <= mid && j <= right) {
    if (arr[i++] <= arr[j++]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  if (i > mid) for (; j <= right; j++) sorted[k++] = arr[j];
  else for (; i <= mid; i++) sorted[k++] = arr[i];

  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
  return arr;
}
// let mergesort = [1, 3, 5, 2, 4, 7, 8, 9];
// console.log(
//   merge(
//     mergesort,
//     0,
//     Math.ceil((mergesort.length - 1) / 2),
//     mergesort.length - 1
//   )
// );
