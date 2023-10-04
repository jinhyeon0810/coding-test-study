//1. 예산요청
function solution1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");

  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  let m = Number(input[2]);

  let start = 1;
  let end = arr.reduce((a, b) => Math.max(a, b));
  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (let x of arr) {
      total += Math.min(x, mid);
    }
    if (total <= m) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(result);
}

//2.나무자르기
function solution2() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");

  let n = input[0].split(" ").map(Number)[0];
  let m = input[0].split(" ").map(Number)[1];
  let arr = input[1].split(" ").map(Number);

  let start = 0;
  let end = arr.reduce((a, b) => Math.max(a, b));
  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (let x of arr) {
      if (x > mid) {
        total = total + x - mid;
      }
    }
    if (total < m) end = mid - 1;
    else {
      result = mid;
      start = mid + 1;
    }
  }
  console.log(result);
}

//3. 랜선자르기 파라메르틱 서치 길이가 클수록 만들수있는 갯수는 적어짐
function solution3() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = input[0].split(" ").map(Number)[0];
  let needNum = input[0].split(" ").map(Number)[1];
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i]);
  }
  let start = 1;
  let end = arr.reduce((a, b) => Math.max(a, b));
  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (let x of arr) {
      if (x >= mid) {
        total = total + parseInt(x / mid);
      }
      if (total < needNum) {
        end = mid - 1;
      } else {
        result = mid;
        start = mid + 1;
      }
    }
  }
  console.log(result);
}

//4.숫자카드문제   lowerBound와 upperBound를 이용하여 중복숫자 갯수를 구할 수 있음
function solution4() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input[0]);
  let nArray = input[1].split(" ").map(Number);
  let m = Number(input[2]);
  let mArray = input[3].split(" ").map(Number);

  nArray.sort((a, b) => a - b);
  let answer = "";
  for (let i = 0; i < m; i++) {
    let cnt = countByRange(nArray, mArray[i], mArray[i]);
    answer = answer + cnt + " ";
  }
  console.log(answer);
}

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

//5. 병사 배치
function solution5() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");

  let n = Number(input[0]);

  let array = input[1].split(" ").map(Number);

  array.reverse();
  console.log(array);
}
console.log(solution5());
