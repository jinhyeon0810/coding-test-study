function example_code(v) {
  let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];
  let visited = new Array(graph.length).fill(false);

  function dfs(v) {
    visited[v] = true;
    for (x of graph[v]) {
      if (!visited[x]) dfs(x);
    }
  }
  dfs(v);
}

//Dfs예시코드 다시구현해보기

function example_code1() {
  let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

  //DFS 깊이 구현 탐색 동작 구현
  //인접노드 방문시 boolean값 update
  //인접 노드를 끝까지 타고들어가고(더이상 방문안한 인접노드가 없을때) 함수종료
  //재귀로 호출했기에 상위 노드로 돌아와서 인접노드 존재하는지 탐색 후 이동 하는 방식으로 코드짜면됨
  let visited = new Array(graph.length).fill(false);

  function dfs(a) {
    visited[a] = true;
    for (let i of graph[a]) {
      if (!visited[i]) dfs(i);
    }
  }
  dfs(1);
  console.log("visit", visited);
}

//1. 2606 웜바이러스 문제
function solution1() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let num = Number(input[0]);
  let connectedNum = Number(input[1]);

  let graph = [];
  for (let i = 0; i <= num; i++) graph.push([]);
  for (let i = 2; i <= connectedNum + 1; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  let visited = new Array(num).fill(false);
  let cnt = 0;
  function dfs(v) {
    visited[v] = true;
    cnt += 1;
    for (let i of graph[v]) {
      if (!visited[i]) dfs(i);
    }
  }
  dfs(1);
  let result = cnt - 1;
}

//1-2 웜바이러스 2606번
function solution1_2() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  console.log(input);

  //우선 그래프를 코드로 구현한다. 인접노드를 나타낼때 배열의 인덱스를 인접 노드중 하나로 지정하고, 인덱스의 value를 나머지 연결되는 인접노드로 지정
  //1번부터 시작해서 깊이 우선탐색 시작, 방문 여부를 불리언으로 관리하고, 불리언이 바뀔때마다 cnt += 1 해준다
  //최종 cnt 값 또는 방문여부에서 true인 숫자가 인접노드 숫자이고, 이 숫자에서 처음 시작한 1번 노드를 빼주면 result는 cnt-1이 된다.

  let numOfCom = Number(input[0]);
  let lines = Number(input[1]);
  let graph = [];
  let visited = new Array(lines + 1).fill(false);
  let cnt = 0;
  for (let i = 0; i <= numOfCom; i++) {
    graph.push([]);
  }

  for (let i = 2; i <= numOfCom; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  console.log("graph", graph);
  function dfs(m) {
    cnt += 1;
    visited[m] = true;

    for (let i of graph[m]) {
      if (!visited[i]) dfs(i);
    }
  }
  dfs(1);

  let result = cnt - 1;
  return result;
}
console.log(solution1_2());

//2.백준 1012 유기농배추 문제
// function solution2() {
//   let fs = require("fs");
//   let input = fs.readFileSync("index.txt").toString().split("\n");
//   let testCases = Number(input[0]);
//   let line = 1;

//   function dfs(graph, n, m, x, y) {
//     if (x <= -1 || x >= n || y <= -1 || y >= m) {
//       return false;
//     }

//     if (graph[x][y] == 1) {
//       graph[x][y] = -1;
//       dfs(graph, n, m, x - 1, y);
//       dfs(graph, n, m, x, y - 1);
//       dfs(graph, n, m, x + 1, y);
//       dfs(graph, n, m, x, y + 1);
//       return true;
//     }
//     return false;
//   }

//   while (testCases--) {
//     let [m, n, k] = input[line].split(" ").map(Number);
//     let graph = [];
//     for (let i = 0; i < n; i++) {
//       graph[i] = new Array(m);
//     }

//     for (let i = 1; i <= k; i++) {
//       let [y, x] = input[line + i].split(" ").map(Number);
//       graph[x][y] = 1;
//     }
//     let answer = 0;

//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < m; j++) {
//         if (dfs(graph, n, m, i, j)) {
//           answer++;
//           console.log("가로,세로", j, i);
//           console.log("answering", answer);
//         }
//       }
//     }
//     line += k + 1;
//     console.log("answer", answer);
//   }
// }

//2. 백준 1012 유기농배추
function solution2() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");

  let testCases = Number(input[0]);
  let line = 1;

  while (testCases--) {
    let [m, n, k] = input[line].split(" ").map(Number);

    let graph = [];
    for (let i = 0; i < n; i++) {
      graph[i] = new Array(m).fill(0);
    }
    for (let i = 1; i <= k; i++) {
      let [x, y] = input[line + i].split(" ").map(Number);
      graph[y][x] = 1;
    }

    let answer = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (dfs(graph, m, n, i, j)) {
          answer++;
        }
      }
    }
    line += k + 1;
    console.log("answer", answer);
  }

  function dfs(graph, m, n, x, y) {
    if (x < 0 || x >= m || y < 0 || y >= n) {
      return false;
    }
    if (graph[y][x] === 1) {
      graph[y][x] = -1;
      dfs(graph, m, n, x - 1, y);
      dfs(graph, m, n, x, y - 1);
      dfs(graph, m, n, x + 1, y);
      dfs(graph, m, n, x, y + 1);
      return true;
    }
    return false;
  }
}

//3. 백준 1240 노드사이의 거리 : 이해안됨
function solution3() {
  let fs = require("fs");
  let input = fs.readFileSync("index.txt").toString().split("\n");
  let [nodeNum, m] = input[0].split(" ").map(Number);
  // 1: 2(2),4(3)
  // 2: 1(2)
  // 3: 4(2)
  // 4: 3(2)
  let graph = [];
  for (let i = 0; i < nodeNum + 1; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < nodeNum; i++) {
    let [x, y, cost] = input[i].split(" ").map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
  }

  for (let i = 0; i < m; i++) {
    let [x, y] = input[nodeNum + i].split(" ").map(Number);
    // visited = new Array(n + 1).fill(false);
  }

  console.log("graph", graph);
}

// console.log(solution3());

//4. 배ㄱ준 4803 bfs
function solution4() {}
