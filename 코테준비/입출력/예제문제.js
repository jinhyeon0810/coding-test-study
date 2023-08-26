// 1.A+B
let fs = require("fs");
let input = fs.readFileSync("index.txt").toString().split("\n");

// console.log(input[0].split(" "));
let line = input[0].split(" ");
let a = Number(line[0]);
let b = Number(line[1]);

function solution() {
  return a + b;
}

// console.log(solution(a, b));

// 2.A*B
function solution2() {
  console.log(a * b);
}

// console.log(solution2(a, b));

// 3. A+B,A-B,A*B,A/B,A%B
function solution3(a, b) {
  const results = [];

  results.push(a + b);
  results.push(a - b);
  results.push(a * b);
  results.push(parseInt(a / b));
  results.push(a % b);

  return results;
}

// console.log(solution3(a, b));

//4. 곱셈
function solution4(x, y) {
  let result1 = x * (y - Math.floor(y / 10) * 10);
  let result2 = x * Math.floor((y - Math.floor(y / 100) * 100) / 10);
  let result3 = x * Math.floor(y / 100);
  let result4 = result1 + result2 * 10 + result3 * 100;
  return { result1, result2, result3, result4 };
}

let x = 472;
let y = 385;

