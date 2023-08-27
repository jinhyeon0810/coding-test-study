//1. 연속된N 문자열의 합
// function solution1() {
//   let fs = require("fs");
//   let input = fs.readFileSync("index.txt").toString().split("\n");
//   let n = Number(input[0]);
//   let data = input[1].split("").map(Number);
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum = sum + data[i];
//   }
//   console.log(sum);
// }

// console.log(solution1());

//2.문자열반복
// function solution2() {
//   let fs = require("fs");
//   let input = fs.readFileSync("index.txt").toString().split("\n");
//   let testCases = Number(input[0]);
//   // let data = input[1].split(" ");
//   for (let i = 1; i <= testCases; i++) {
//     let [r, s] = input[i].split(" ");
//     let result = "";
//     for (let i = 0; i < s.length; i++) {
//       result = result + s.charAt(i).repeat(r);
//     }
//     console.log(result);
//   }
// }

// console.log(solution2());

//3. 상수문제
// function solution3() {
//   let fs = require("fs");
//   let input = fs.readFileSync("index.txt").toString().split("\n");
//   let a = input[0].split(" ")[0];
//   let b = input[0].split(" ")[1];

//   let newA = a[2] + a[1] + a[0];
//   let newB = b[2] + b[1] + b[0];
//   let result = Math.max(newA, newB);
//   console.log(result);
// }

// console.log(solution3());

//4. 그룹 단어 제거
