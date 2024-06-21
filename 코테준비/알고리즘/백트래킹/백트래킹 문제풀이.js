//1. 15649번 N과 M
function solution1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split(" ");
  let [lastNum, depth] = input.map(Number);
  let arr = [];
  for (let i = 1; i <= lastNum; i++) arr.push(i);

  let selected = [];
  let visited = Array.from({ length: lastNum }, () => false);
  function dfs(m) {
    if (depth == m) {
      let result = [];
      for (let a of selected) {
        result.push(arr[a]);
      }
      console.log("result", result);
      return result;
    }
    for (let i = 0; i < lastNum; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      selected.push(i);
      dfs(m + 1);
      selected.pop();
      visited[i] = false;
    }
  }
  dfs(0);
}

//2.10974 모든순열
function solution2() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString();
  let num = Number(input);

  let arr = [];
  for (let i = 1; i <= num; i++) arr.push(i);

  let selected = [];
  let visited = new Array(num).fill(false);

  let answer = "";
  function dfs(dep) {
    if (dep === num) {
      let result = [];
      for (let x of selected) result.push(arr[x]);
      for (let x of result) answer += x + " ";
      answer = answer + "\n";
      return;
    }
    for (let i = 0; i < num; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      selected.push(i);
      dfs(dep + 1);
      selected.pop();
      visited[i] = false;
    }
  }
  dfs(0);
  console.log(answer);
}

//3. 백준 7490 번 풀기

//4. 15651번 풀기
function solution4() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split(" ");
  let [lastNum, depth] = input.map(Number);
  let arr = [];
  for (let i = 1; i <= lastNum; i++) arr.push(i);
  let selected = [];
  let answer = "";

  function dfs(m) {
    if (depth == m) {
      let result = [];
      for (let x of selected) {
        result.push(arr[x]);
      }
      for (let x of result) answer += x + " ";
      answer += "\n";
      return;
    }

    for (let i = 0; i < lastNum; i++) {
      //   if (visited[i]) continue;
      selected.push(i);
      dfs(m + 1);
      selected.pop();
    }
  }
  dfs(0);
  console.log(answer);
}
//5. 15652 중복수열
function solution5() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split(" ");
  let [lastNum, depth] = input.map(Number);
  let arr = [];
  for (let i = 1; i <= lastNum; i++) arr.push(i);

  let selected = [];
  let answer = "";
  function dfs(m, start) {
    if (m == depth) {
      let result = [];
      for (let x of selected) result.push(arr[x]);
      for (let x of result) answer += x + " ";
      answer += "\n";
      return;
    }

    for (let i = start; i < lastNum; i++) {
      selected.push(i);
      dfs(m + 1, i);
      selected.pop();
    }
  }
  dfs(0, 0);
  console.log(answer);
}

//6. 10971번 외판원 순회2
function solution6() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let cityNum = Number(input[0]);
  let graph = [];
  for (let i = 0; i <= cityNum; i++) graph.push([0]);
  for (let i = 1; i <= cityNum; i++) {
    let line = input[i].split(" ").map(Number);
    graph[i].push(...line);
  }

  let visited = new Array(4).fill(false);
  let selected = [];
  let minValue = 1e9;
  function dfs(depth) {
    if (depth == cityNum - 1) {
      let totalCost = 0;
      let cur = 1;
      for (let i = 0; i < cityNum - 1; i++) {
        let nextNode = selected[i];
        let cost = graph[cur][nextNode];
        if (cost === 0) return;
        totalCost += cost;
        cur = nextNode;
      }
      cost = graph[cur][1];
      if (cost == 0) return;
      totalCost += cost;
      minValue = Math.min(minValue, totalCost);

      return;
    }

    for (let i = 2; i <= cityNum; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }
  dfs(0);
  console.log(minValue);
}

function solution6_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");

  let numOfCity = Number(input[0]);
  let graph = [];
  for (let i = 0; i <= numOfCity; i++) graph.push([0]);
  for (let i = 1; i <= numOfCity; i++) {
    let line = input[i].split(" ").map(Number);
    graph[i].push(...line);
  }

  let visited = new Array(numOfCity).fill(false);
  let selected = [];
  let minValue = 1e9;

  function dfs(depth) {
    if (depth === numOfCity - 1) {
      let totalCost = 0;
      let cur = 1;
      for (let i = 0; i < numOfCity - 1; i++) {
        let nextNode = selected[i];
        let cost = graph[cur][nextNode];
        if (cost === 0) return;
        totalCost += cost;
        cur = nextNode;
      }
      let cost = graph[cur][1];
      if (cost === 0) return;
      totalCost += cost;
      minValue = Math.min(totalCost, minValue);
      return minValue;
    }

    for (let i = 2; i <= numOfCity; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      selected.push(i);
      dfs(depth + 1);
      visited[i] = false;
      selected.pop();
    }
  }
  dfs(0);
  console.log(minValue);
}

console.log(solution6_1());

// function solution6() {
//   let fs = require("fs");
//   let input = fs.readFileSync("index.txt").toString().split("\n");
//   let n = Number(input[0]);
//   let graph = [];
//   for (let i = 0; i <= n; i++) graph.push([0]);
//   for (let i = 1; i <= n; i++) {
//     let line = input[i].split(" ").map(Number);
//     for (let j = 0; j < n; j++) graph[i].push(line[j]);
//   }
//   console.log("graph", graph);
//   let visited = new Array(11).fill(false);
//   let result = [];
//   let minValue = 1e9;

//   function dfs(depth) {
//     if (depth == n - 1) {
//       console.log("result", result);
//       console.log("visited", visited);
//       let totalCost = 0;
//       let cur = 1;
//       for (let i = 0; i < n - 1; i++) {
//         let nextNode = result[i];
//         let cost = graph[cur][nextNode];
//         if (cost === 0) return;
//         console.log("costs", cost);
//         cur = nextNode;
//         totalCost += cost;
//       }
//       let cost = graph[cur][1];
//       if (cost == 0) return;
//       totalCost += cost;
//       minValue = Math.min(minValue, totalCost);
//       console.log("totalCost", totalCost);
//       console.log("minValue", minValue);
//     }

//     for (let i = 2; i <= n; i++) {
//       if (visited[i]) continue;
//       result.push(i);
//       visited[i] = true;
//       dfs(depth + 1);
//       result.pop();
//       visited[i] = false;
//     }
//   }

//   dfs(0);
//   console.log("min", minValue);
// }
// console.log(solution6());
