function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let left = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[left] < arr[j]) {
        swap(arr, left, j);
        left = j;
      }
    }
  }

  return arr;
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(insertSort([2, 3, 1, 9, 76, 11, 4]));
// 2 "1" 9 76 4
// 1 2 "9" 76 4
// 1 2 9 "76" 4
// 1 2 9 76 "4"
// 1 2 4 9 76
