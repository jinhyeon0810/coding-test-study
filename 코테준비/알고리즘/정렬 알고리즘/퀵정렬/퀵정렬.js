function pivot(arr, left = 0, right = arr.length - 1) {
  let pivotValue = arr[left];
  let swapIdx = left;

  for (let i = left + 1; i <= right; i++) {
    if (pivotValue > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }

  [arr[left], arr[swapIdx]] = [arr[swapIdx], arr[left]];
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  const pivotIndex = pivot(arr, left, right);

  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
  console.log("arr", arr);
  return arr;
}

console.log("here", quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
