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

//2. 버블정렬 함수
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

//3.삽입정렬 함수
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
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
console.log(arr2);
