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

//1번 수열 복습
function solution1_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split(" ");
  console.log("input", input);
  let [n, m] = input.map(Number);
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);

  let visited = new Array(n).fill(false);
  let selected = [];
  let answer = "";

  function dfs(depth) {
    if (depth === m) {
      let result = [];
      for (let x of selected) result.push(arr[x]);
      for (let x of result) answer += x + " ";
      answer += "\n";
      console.log("answer", answer);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(depth + 1);
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
      console.log("이때depth", depth);
      console.log("graph", graph);
      let totalCost = 0;
      let cur = 1;
      for (let i = 0; i < numOfCity - 1; i++) {
        let nextNode = selected[i];
        let cost = graph[cur][nextNode];
        console.log("cur", cur);
        console.log("next", nextNode);
        if (cost === 0) return;
        console.log("cost", cost);

        totalCost += cost;
        cur = nextNode;
      }
      let cost = graph[cur][1];
      console.log("cost2", cost);
      console.log("after", graph);
      if (cost === 0) return;
      totalCost += cost;
      console.log("cur", cur, "totalCost", totalCost);

      console.log("seleceted", selected);
      minValue = Math.min(totalCost, minValue);
      console.log("min", minValue);
      return minValue;
    }

    for (let i = 2; i <= numOfCity; i++) {
      console.log("start", i, "depth", depth);
      if (visited[i]) continue;
      visited[i] = true;
      selected.push(i);
      console.log("seling", selected);
      console.log("visiting", visited);
      dfs(depth + 1);
      console.log("here?", i);
      console.log("heredepth>?", depth);
      visited[i] = false;
      selected.pop();

      console.log("afterselected", selected);
      console.log("aftervisited", visited);
    }
  }
  dfs(0);
  console.log(minValue);
}
// console.log(solution6_1());

//외판원순회2
function solution6_2() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let cityNum = Number(input[0]);

  let graph = [];
  for (let i = 0; i <= cityNum; i++) {
    graph.push([0]);
  }

  for (let i = 1; i <= cityNum; i++) {
    let line = input[i].split(" ").map(Number);
    graph[i].push(...line);
  }

  let visited = new Array(cityNum + 1).fill(false);
  let selected = [];
  let minValue = 1e9;
  function dfs(m) {
    if (m === cityNum) {
      let totalCost = 0;
      let startNode = 0;
      let nextNode = 0;
      for (let i = 0; i < cityNum - 1; i++) {
        startNode = selected[i];
        nextNode = selected[i + 1];
        let cost = graph[startNode][nextNode];
        if (cost === 0) return;
        totalCost += cost;
      }
      let cost = graph[nextNode][selected[0]];
      if (cost === 0) return;
      totalCost += cost;
      minValue = Math.min(minValue, totalCost);
      console.log("min", minValue);
      return;
    }

    for (let i = 1; i <= cityNum; i++) {
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

// console.log(solution6_1());

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

//7. 도영이음식 백준 2961
function solution7() {
  //신것들의 곱 - 쓴것들의 합 의 최소를 구한다.
  //1e9 설정하고 비교해줘서 min찾기
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");

  let number = Number(input[0]);

  let graph = [];
  for (let i = 1; i <= number; i++) {
    let line = input[i].split(" ").map(Number);
    graph.push(line);
  }
  let selected = [];
  let visited = new Array(number).fill(false);
  let minValue = 1e9;
  function dfs(depth) {
    if (depth > 0) {
      let totalX = 1;
      let totalY = 0;

      for (let i of selected) {
        let [x, y] = graph[i];
        totalX *= x;
        totalY += y;
      }
      minValue = Math.min(minValue, Math.abs(totalX - totalY));
    }

    for (let i = 0; i < number; i++) {
      if (visited[k]) continue;
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
// console.log(solution7());

//8. 로또 백준 6603
function solution8() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");

  for (let i = 0; i < input.length - 1; i++) {
    let line = input[i].split(" ").map(Number);
    let k = line[0];
    let arrS = [];
    for (let j = 1; j <= k; j++) arrS.push(line[j]);
    let visited = new Array(k).fill(false);
    let selected = [];

    function dfs(depth, start) {
      if (depth == 6) {
        let result = [];
        let answer = "";
        for (let i of selected) result.push(arrS[i]);
        for (let x of result) answer += x + " ";
        answer += "\n";

        console.log("answer", answer);
        return answer;
      }

      for (let i = start; i < k; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
      }
    }

    dfs(0, 0);
  }
}

//9. 백준 9663 N-Queen 문제
function solution9() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString();
  let n = Number(input[0]);
  console.log(n);
  let queen = [];
  //위치시킬수 있는지 true/false 함수
  function possible([a, b]) {
    for (let [x, y] of queen) {
      if (a === x || b === y) return false;
      if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }
    return true;
  }
  let cnt = 0;
  function backtracking(row) {
    if (row === n) {
      cnt += 1;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!possible([row, i])) continue;
      queen.push([row, i]);
      backtracking(row + 1);
      queen.pop();
    }
  }
  backtracking(0);
  console.log("cnt", cnt);
}
// console.log(solution9());

//10. 백준 1987번 알파벳문제 이따 다시풀어보기
function solution10() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let [col, row] = input[0].split(" ").map(Number);
  console.log(col, row);
  let arr = [];
  for (let i = 1; i <= col; i++) arr.push(input[i]);
  console.log("arr", arr);
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let visited = new Set();
  console.log("visite", visited);
  let maxDepth = 0;

  function dfs(depth, x, y) {
    maxDepth = Math.max(maxDepth, depth);
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue;

      if (visited.has(arr[nx][ny])) continue;
      console.log("visited", visited);
      visited.add(arr[nx][ny]);
      dfs(depth + 1, nx, ny);
      visited.delete(arr[nx][ny]);
    }
  }
  visited.add(arr[0][0]);
  dfs(1, 0, 0);
  console.log(maxDepth);
}

//10-1 백준 1987 알파벳
function solution10_1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let [col, row] = input[0].split(" ").map(Number);
  let graph = [];
  for (let i = 1; i <= col; i++) {
    let line = input[i];
    graph.push(line);
  }

  let visited = new Set();
  visited.add(graph[0][0]);
  // 돌아가면서 지정해줄 인덱스, i번째 [dx][dy]식으로 나타내면 상하좌우를 움직일 수 있다.
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let maxDepth = 0;
  function dfs(depth, x, y) {
    maxDepth = Math.max(depth, maxDepth);
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue;

      if (visited.has(graph[nx][ny])) continue;

      visited.add(graph[nx][ny]);
      dfs(depth + 1, nx, ny);
      visited.delete(graph[nx][ny]);
    }
  }
  dfs(1, 0, 0);
  console.log("max", maxDepth);
}

// console.log(solution10_1());

//11. 백준2529 부등호 다시풀기
function solution11() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let num = Number(input[0]);
  let sign = input[1].split(" ");

  let result = [];
  let visited = new Array(10).fill(false);
  let value = "";
  let first = "";
  function dfs(depth) {
    if (depth === num + 1) {
      let checked = true;
      for (let i = 0; i < num; i++) {
        if (sign[i] === ">") {
          //하나라도 만족 안하는게있으면 false때림
          if (result[i] < result[i + 1]) checked = false;
        } else if (sign[i] === "<") {
          //하나라도 만족 안하는게 있으면 false때림
          if (result[i] > result[i + 1]) checked = false;
        }
      }
      if (checked) {
        value = "";
        for (let data of result) {
          value += data + "";
        }
        if (first === "") {
          console.log("firstbefore", first);
          //순열이 0부터시작하니까 가장먼저 value값을 걍 first에 넣음
          first = value;
          console.log("firstafter", first);
        }
      }
      return;
    }

    for (let i = 0; i < 10; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      result.push(i);
      dfs(depth + 1);
      visited[i] = false;
      result.pop();
    }
  }
  dfs(0);
  console.log(value, first);
}

console.log(solution11());
