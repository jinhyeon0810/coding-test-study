//3.두 수 최대 합이 나오는 배열 만들기

function answer(nums) {
  let result = [];

  // nums배열  첫번째, 두번째 값을 먼저 비교하여 순서를 정한 뒤 result에 넣고
  // 나머지 nums 배열의 값들과 비교를 해주는 방식으로 해결했습니다.
  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      //기존의 result[0] 값이 사라지는 것을 방지하기위해 result[1] 로 shift
      result[1] = result[0];
      result[0] = nums[i];
    } else if (nums[i] > result[1]) {
      //result[0]보다 작아도 result[1] 보다 크게되면 값을 result[1]에 넣어줍니다.
      result[1] = nums[i];
    }
  }

  return result;
}

nums = [-11, 5, 18, -2, -3, 6, 4, 7, 10, 9];

console.log(answer(nums));
