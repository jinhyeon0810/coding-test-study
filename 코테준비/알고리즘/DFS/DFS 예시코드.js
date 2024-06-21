function example_code(v) {
  let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];
  let visited = new Array(graph.length).fill(false);

  function dfs(v) {
    visited[v] = true;
    for (x of graph[v]) {
      console.log("graph[v]", graph[v]);
      if (!visited[x]) dfs(x);
    }
  }
  dfs(v);
}
console.log(example_code(1));
