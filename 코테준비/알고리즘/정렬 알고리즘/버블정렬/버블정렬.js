function bubbleSort(arr) {
  //0부터 오른쪽으로 크기 비교 후, 큰 수를 오른쪽으로 보냄

  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));
[9, 1, 3, 2, 6, 8];
[1, 3, 2, 6, 8, 9];
