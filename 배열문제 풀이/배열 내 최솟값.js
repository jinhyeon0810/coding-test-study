//문제 1 : 배열 내에서 최솟값을 찾고, 그 index 값을 도출하라.

function answers(nums) {
  let result = [];
  let min = Number.MAX_SAFE_INTEGER;

  //최솟값을 먼저 찾는다.
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }

  //최솟값의 index를 구한다.
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (min === nums[i]) {
      result[count++] = i;
    }
  }
  return result;
}

nums = [21, 2, 19, 2];

console.log(answers(nums));
