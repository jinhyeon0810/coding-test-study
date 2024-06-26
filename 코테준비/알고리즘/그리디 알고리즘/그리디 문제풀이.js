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

//1-1 동전 그리디문제
function solution1_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let [a, b] = input[0].split(" ");
  let n = Number(a);
  let k = Number(b);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  let num = 0;
  for (let i = n - 1; i >= 0; i--) {
    num += parseInt(k / arr[i]);
    k = k % arr[i];
  }
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

//2-1 ATM 문제 복습
function solution2_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let num = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);
  let answer = 0;
  let summary = 0;
  for (let i = 0; i < num; i++) {
    summary += arr[i];
    answer += summary;
  }
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

//3-1 잃어버린 괄호
function solution3_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  console.log(input[0]);
  let data = input[0].split("-");
  let answer = 0;
  for (let i = 0; i < data.length; i++) {
    let value = data[i]
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b);
    console.log(value, "here");
    if (i === 0) answer = value;
    else answer -= value;
  }
  return answer;
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

//4-1 설탕배달
function solution4_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input);

  let result = 0;
  console.log(n);
  if (n % 5 !== 3 && n % 3 !== 0) result = -1;
  else result = parseInt(n / 5) + 1;
  return result;
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

//5-1
function solution5_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split(" ");
  let [a, b] = input.map(Number);
  let num = 0;

  while (b !== a) {
    if (a > b) return -1;
    else if (b % 2 === 0) {
      b = b / 2;
      num++;
    } else if (b % 2 !== 0) {
      b = parseInt(b / 10);
      num++;
    }
  }
  return num + 1;
}
// console.log(solution5_1());

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

//7. 신입사원 : 다시풀어보기
function solution7() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let testCase = Number(input[0]);
  let line = 1;

  for (let tc = 0; tc < testCase; tc++) {
    let n = Number(input[line]);
    let arr = [];
    for (let i = line + 1; i <= line + n; i++) {
      arr.push(input[i].split(" ").map(Number));
    }

    arr.sort((a, b) => {
      return a[0] - b[0];
    });
    console.log(arr);

    let min = 100001;
    let answer = 0;

    for (let [x, y] of arr) {
      if (y < min) {
        min = y;
        answer += 1;
      }
    }
    line += n + 1;
    console.log(answer);
  }
}

//8. 주유소
function solution8() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let countryNum = Number(input[0]);
  let distance = input[1].split(" ").map(Number);
  let price = input[2].split(" ").map(Number);
  console.log(price);
  let minValue = 10001;
  let answer = 0;
  for (let i = 0; i < countryNum; i++) {
    if (price[i] < minValue) {
      minValue = price[i];
      price[i] = minValue;
    } else {
      price[i] = minValue;
    }
  }
  for (let i = 0; i < countryNum - 1; i++) {
    answer = answer + price[i] * distance[i];
  }
  console.log(answer);
}

//8-1 주유소
function solution8_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let number = Number(input[0]);
  console.log(input);
}

//9. 회의실 배정
function solution9() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let allNum = input[0];
  let arr = [];
  for (let i = 1; i <= allNum; i++) {
    arr.push(input[i].split(" ").map(Number));
  }
  console.log(arr, "arr1");

  arr.sort((a, b) => {
    if (a[1] != b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  console.log(arr, "arr2");
  let count = 0;
  let answer = 1;
  for (let i = 1; i < allNum; i++) {
    if (arr[count][1] <= arr[i][0]) {
      answer++;
      count = i;
    }
  }
  console.log(answer);
}
// console.log(solution9());

//9-1 회의실
function solution9_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input[0]);
  console.log(n);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" ").map(Number));
  }
  console.log(arr);

  arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  let answer = 1;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (arr[count][1] <= arr[i][0]) {
      answer += 1;
      count = i;
    }
  }
  return answer;
}
// console.log(solution9_1());

//10. 11509  ㅅㅂ 이거모르겟음
function solution10() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  let count = 0;
  // for (let i = 0; i < 5; i++) {
  //   if (arr[i] - arr[i + 1] === 1) {
  //     if (arr[i + 1] - arr[i + 2] !== 1) {
  //       count += 1;
  //       i = i + 2;
  //     }
  //   } else count += 1;
  // }
}

//11. 피보나치 백준 9009
function solution11() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let num = Number(input[0]);
  let arr = [];
  for (let i = 1; i <= num; i++) arr.push(Number(input[i]));

  function makeFibonacciArr(number) {
    let fibo = [0, 1];
    while (fibo[fibo.length - 1] < number) {
      const sum = fibo[fibo.length - 1] + fibo[fibo.length - 2];
      if (sum <= number) fibo.push(sum);
      else return fibo;
    }
    return fibo;
  }
  let result = [];
  for (let number of arr) {
    while (number > 0) {
      console.log("number", number);
      //들어가는값이 >0일때 , 들어가는값은 ? :
      //계속반복 :들어간값에서  들어간 값보다 작은 가장 큰 fibo값을 빼줌
      const fiboArr = makeFibonacciArr(number);
      console.log("fiboArr", fiboArr);
      number = number - fiboArr[fiboArr.length - 1];
      result.push(fiboArr[fiboArr.length - 1]);
    }
  }
  let answer = "";
  for (let i = result.length - 1; i >= 0; i--)
    answer = answer + result[i] + " ";
  console.log("answer", answer);
}

//11. 19939번 : 이거 규칙을어떻게 찾냐 신기하다;;
function solution12() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split(" ");
  let inputNumArr = input.map((data) => parseInt(data, 10));
  let [n, k] = inputNumArr;
  //5개를 배열 3개 안으로 넣는거?
  //서로다른 3개의 합이 5임.,  최대-최소
  //규칙 : 최대-최소 값이 차이가 적어야되기 때문에, 최대한 연속된 수로 나누어 공을 담아야함
  // 연속된 수의 합일 경우, 최대-최소 값이 k-1로 나타나는 규칙성을 띔
  // 나머지 경우는 k 으로 나타나는 규칙성을 띔
  let sum = 0;
  for (let i = 1; i <= k; i++) {
    sum += i;
  }
  console.log("sum", sum);
  if (sum > n) {
    console.log(-1);
  } else {
    if (sum % k === 0) console.log("k-1 값", k - 1);
    else console.log("k값", k);
  }
}

//17609번?
function solution13() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("/n");
  console.log(input[1]);
  function palindrome(x) {
    return x === x.split("").reverse().join("");
  }
  let testCase = Number(input[0]);
  let arr = [];

  for (let tc = 1; tc <= testCase; i++) {
    //n번째 값을 가지고 palindrome에 넣어서
    // 나온값이 회문이면 0, 유사회문이면 1, 둘다 아니면 2 출력
    let data = input[tc];
    let n = data.length;
  }
}

function solution14() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let [width, length, height] = input[0].split(" ").map((data) => Number(data));
  let boxSize = width * length * height;
  let numberOfCubeType = Number(input[1]);
  let numberOfCubesArr = [];
  let result = 0;
  let usedCount = 0;
  for (let i = 2; i <= 1 + numberOfCubeType; i++) {
    numberOfCubesArr.push(Number(input[i].split(" ").map((data) => data)[1]));
  }
  for (let i = numberOfCubeType - 1; i >= 0; i--) {
    //큐브 마다 박스 채우는 갯수 8배씩 차이남
    usedCount *= 8;
    let currentCubeSize = (2 ** i) ** 3;
    let currentMaxCount = boxSize / currentCubeSize - usedCount;
    let currentCount = Math.min(currentMaxCount, numberOfCubesArr[i]);
    result += currentCount;
    usedCount += currentCount;
  }
  if (usedCount === boxSize) return result;
  else return -1;
}
console.log(solution14());
