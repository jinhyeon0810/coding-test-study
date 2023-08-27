//1. N개 정수중 최소,최대 구하는 문제
// function solution1(data) {
//   let minValue = data.reduce((a, b) => Math.min(a, b));
//   let maxValue = data.reduce((a, b) => Math.max(a, b));
//   return { minValue, maxValue };
// }

// let N = 5;
// let data = [20, 10, 35, 30, 7];
// console.log(solution1(data));

//2. 최댓값문제
// function solution2() {
//   let fs = require("fs");
//   let input = fs.readFileSync("index.txt").toString().split("\n");
//   let data = input.map((x) => Number(x));
//   let maxValue = data.reduce((a, b) => Math.max(a, b));
//   let maxIndex = data.indexOf(maxValue);
//   return { maxValue, maxIndex };
// }

// console.log(solution2());

//3. 나머지
// function solution3() {
//   let fs = require("fs");
//   let input = fs.readFileSync("index.txt").toString().split("\n");
//   let data = input.map((x) => Number(x));
//   let mySet = new Set();
//   for (let i = 0; i < data.length; i++) {
//     mySet.add(data[i] % 42);
//     //중복된 원소는 추가적으로 삽입안됩니다...
//   }
//   return mySet.size;
// }

// console.log(solution3());`  `

//4.평균은넘겠지
// function solution4() {
//   let result;
//   let fs = require("fs");
//   let input = fs.readFileSync("index.txt").toString().split("\n");
//   let testCases = input[0];
//   let cnt = 0;

//   // console.log(input[0]);
//   for (let i = 1; i <= testCases; i++) {
//     let data = input[i].split(" ").map(Number);
//     let n = data[0];
//     let summary = 0;
//     for (let i = 1; i <= n; i++) {
//       summary = summary + data[i];
//     }
//     let average = summary / n;

//     for (let i = 1; i <= n; i++) {
//       if (average < data[i]) cnt += 1;
//     }
//     result = ((cnt / n) * 100).toFixed(3);
//     console.log(result);
//   }
// }

// console.log(solution4());

//5. 평균문제
// function solution5(M) {
//   let fs = require("fs");
//   let input = fs.readFileSync("index.txt").toString().split("\n");
//   let data = input[1].split(" ").map(Number);
//   let n = input[0];
//   M = Math.max(...data);
//   //최고 점수 index
//   let newSummary = 0;
//   let newData;
//   for (let i = 0; i < n; i++) {
//     newData = (data[i] / M) * 100;
//     newSummary = newSummary + newData;
//   }
//   console.log(newSummary / n);
// }
// console.log(solution5());
