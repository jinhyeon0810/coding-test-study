//1.숫자 3개 정렬
function solution1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let inputData = input[0].split(" ").map(Number);
  inputData.sort(function (a, b) {
    return a - b;
  });
}

// 정렬함수 구현 : 데이터가 3개밖에 되지않는 상황에선 선택정렬을 이용하여 해결할 수 있음
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        console.log("포함되냐?");
      }
    }
  }
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    answer = answer + arr[i] + " ";
  }
  console.log(answer);
}

//2.수 정렬하기
function solution2() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let inputData = input.map(Number);
  console.log(inputData);
  inputData.sort(function (a, b) {
    return a - b;
  });
  let answer = "";
  for (let i = 0; i < inputData.length; i++) {
    answer = answer + inputData[i] + "\n";
  }
  console.log(answer);
}

//3. N개의 수 오름차순정렬 (1<=N<=1,000,000)
function solution3() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let inputData = input.map(Number);
  let n = inputData[0];
  let newData = [];
  for (let i = 1; i <= n; i++) {
    newData.push(inputData[i]);
  }
  newData.sort(function (a, b) {
    return a - b;
  });
  let answer = "";
  for (let i = 0; i < newData.length; i++) {
    answer = answer + newData[i] + "\n";
  }
  console.log(answer);
}

//4.k번째 수 , sort : NlogN 시간복잡도
function solution4() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let inputData = input[0].split(" ").map(Number);
  let n = inputData[0];
  let k = inputData[1];
  let numberData = input[1].split(" ").map(Number);
  numberData.sort(function (a, b) {
    return a - b;
  });
  console.log(numberData[k - 1]);
}

//5. 좌표정렬하기
function solution5() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input[0]);
  let data = [];
  for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    data.push([x, y]);
  }
  function compare(a, b) {
    if (a[0] != b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  }
  data.sort(compare);
  let answer = "";
  for (let point of data) {
    answer += point[0] + " " + point[1] + "\n";
  }
  console.log(answer);
}

//3. 단어정렬
