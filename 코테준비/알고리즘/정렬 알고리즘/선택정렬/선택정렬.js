function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      //최소값과 다음 인덱스를 비교
      if (arr[j] < arr[lowestIdx]) {
        lowestIdx = j;
      }
    }
    swap(arr, i, lowestIdx);
  }

  return arr;
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log("selection", selectionSort([0, 2, 34, 22, 10, 19, 17]));
