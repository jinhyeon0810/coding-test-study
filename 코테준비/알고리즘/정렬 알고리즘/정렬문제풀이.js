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
        console.log(temp);
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        console.log(temp, "밑에꺼");
        console.log("포함되냐?");
        console.log(arr);
      }
    }
  }
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    answer = answer + arr[i] + " ";
  }
  console.log(answer);
}
// console.log(selectionSort([3, 4, 1, 10, 5, 6]));

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

//6. 단어정렬
function solution6() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i]);
  }
  arr = [...new Set(arr)];
  console.log(arr);

  arr.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    else {
      if (a > b) return 1;
      if (a < b) return -1;
      else return 0;
    }
  });

  for (let x of arr) {
    console.log(x);
  }
}

//7. 좌표압축 (X보다 작은 서로다른 좌표의 갯수: X`)
// -> 좌표를 중복을 제거 한 후, sort 오름차순 정렬후 해당하는 인덱스 값을 뽑아주면 됩니다.
// 서로다른 좌표의 갯수를 구하는 것은 오름차순으로 몇번째에 해당하는지의 값과 똑같다(0부터 시작)
function solution7() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  //중복제거를 위해 집합을 만들고 다시 배열로 만들어줌
  let uniqueArr = [...new Set(arr)];
  //sort정렬
  uniqueArr.sort((a, b) => a - b);

  let myMap = new Map();
  for (let i = 0; i < uniqueArr.length; i++) {
    myMap.set(uniqueArr[i], i);
  }

  let answer = "";
  for (let x of arr) {
    answer = answer + myMap.get(x) + " ";
  }
  console.log(answer);
}

//8.나이순 정렬 : 자바스크립트는 기본적으로 stable sort를 제공
function solution8() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = input[0];
  let arr = [];
  let answer = "";

  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" "));
  }
  arr.sort((a, b) => a[0] - b[0]);
  for (let x of arr) {
    answer = answer + x[0] + " " + x[1] + "\n";
  }
  console.log(answer);
}

//9.각 자릿 수 내림차순 정렬, N<1,000,000,000
//방법 : length가 10인 배열을 만들고 그 안에 데이터 각 자리 숫자를 인덱스로 잡고, for 진행할때마다 인덱스 자리의 cnt값을 올려줍니다.
//중복되는 값이 있을수록 cnt값이 추가로 올라가, 올라간 만큼 중복된 값 갯수가 있는 것입니다.
//이중 for문으로 9부터 시작해서 i값을 줄여나가면서, 해당 i값 안에서 cnt[i]만큼 반복하여 값을 추가해줍니다.(중복)
//i가 9부터 시작하므로 큰값부터 정렬이 진행됩니다.(인덱스 값이 애초 데이터 값이였음)
//빈도수를 생각하여 코드를 짜주어야 했습니다.
function solution9() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = input[0];
  let cnt = Array(10).fill(0);
  for (let x of n) {
    cnt[Number(x)]++;
    console.log(cnt);
  }

  let answer = "";
  for (let i = 9; i >= 0; i--) {
    for (let j = 0; j < cnt[i]; j++) {
      answer = answer + i + "";
    }
  }
  // console.log(answer);
}

//선택정렬알고리즘
function selectionSort1() {
  for (let i = 0; i < inputArr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[minIndex] > inputArr[j]) {
        let temp = inputArr[minIndex];
        inputArr[minIndex] = inputArr[j];
        inputArr[j] = temp;
      }
    }
  }
  let answer = "";
  for (let i = 0; i < inputArr.length; i++) {
    answer = answer + inputArr[i] + " ";
  }
  return answer;
}

// console.log(selectionSort1(inputArr));

//병합정렬
//반으로 계속 분할하고, 더이상 분할

//1-1 세수정렬
function solution1_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split(" ");
  let inputData = input.map(Number);
  inputData.sort((a, b) => a - b);

  return inputData;
}

//2-1 수 정렬
function solution2_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  arr.sort((a, b) => a - b);
  return arr;
}

//3-1 2차원평면 정렬
function solution3_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    arr.push([x, y]);
  }

  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let answer = "";
  for (let x of arr) {
    answer = answer + x[0] + " " + x[1] + "\n";
  }

  return answer;
}

//4-1 좌표정렬2
function solution4_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let n = Number(input[0]);
  let data = [];
  for (let i = 1; i < n; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    data.push([x, y]);
  }

  data.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let answer = "";
  for (let x of data) answer += x[0] + " " + x[1] + "\n";

  return answer;
}
