// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ["5 5 1",
    "1 4",
    "1 2",
    "2 3",
    "2 4",
    "3 4"]

let [N, M, R] = input[0].split(" ").map(Number);

let graph = Array.from(Array(N + 1), () => Array());

for (let i = 1; i < input.length; i++) {
    let temp = input[i].split(' ').map(Number);
    graph[temp[0]].push(temp[1]);
    graph[temp[1]].push(temp[0]);
}

graph.map((v) => v.sort((a, b) => b - a));
var cnt = 1;
var visited = Array(N + 1).fill(0);
visited[0] = -1;

dfs(R);
visited.shift();
console.log(visited.join('\n'));

function dfs(v) {
    if (!visited[v]) {
        visited[v] = cnt++;

        graph[v].forEach(e => {
            dfs(e);
        });
    }
}