//출제빈도가 높은 알고리즘유형임
//1. 동전 0,  가치가 큰동전은 작은 동전들의 합으로 표현 가능(서로 배수관계일 때)
function solution1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input[0].split(" ")[0]);
  let price = Number(input[0].split(" ")[1]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  let num = 0;
  for (let i = n - 1; i >= 0; i--) {
    num = num + parseInt(price / arr[i]);
    price = price % arr[i];
  }
  console.log(num);
}

//2. ATM
function solution2() {
  //큰 값이 뒤로 가야됨
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = input[0];
  let num;
  let data = input[1].split(" ").map(Number);
  data.sort((a, b) => a - b);
  console.log(data);
  for (let i = 1; i < n; i++) {
    data[i] = data[i - 1] + data[i];
  }
  num = data.reduce((a, b) => a + b);
  console.log(num);
}

//3. 잃어버린 괄호 (어려움)
function solution3() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let groups = input[0].split("-");
  console.log(groups);
  let cur = 0;
  let answer = 0;
  for (let i = 0; i < groups.length; i++) {
    cur = groups[i]
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b);
    if (i === 0) answer = cur;
    else {
      answer = answer - cur;
    }
  }
  console.log(answer);
}

//4.설탕배달
function solution4() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let answer;
  if (input[0] % 5 !== 3 && input[0] % 3 !== 0) {
    answer = -1;
  } else {
    answer = parseInt(input[0] / 5) + 1;
  }
  console.log(answer);
}

//5.A->B, a를b로 바꾸는 문제
//b에서 a로 도달하는 방식으로 코드를 구현, 두 수가 같아지면 flag true해주고 break;
function solution5() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let [a, b] = input[0].split(" ").map(Number);
  console.log(a, b);
  let result = 0;
  let flag = false;
  while (a <= b) {
    if (a === b) {
      flag = true;
      break;
    } else {
      if (b % 2 === 0) b = parseInt(b / 2);
      else if (b % 2 !== 0) b = parseInt(b / 10);
    }
    result++;
  }
  if (flag) console.log(result);
}

//6. 수들의 합
// 연속된 수의 합인데 결과값을 넘어서면 while문 탈출하고 그때의 current 에서 1을 뺀 값이 연속된 수들의 갯수이다..
function solution6() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  console.log();
  let sum = 0;

  let current = 0;
  while (sum <= input[0]) {
    current = current + 1;
    sum = sum + current;
  }
  let answer = current - 1;
  console.log(answer);
}
console.log(solution6());
