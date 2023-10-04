function DFS(board, markVisited, markExplored, markPath) {
  const ROW_SIZE = 15;
  const COLUMN_SIZE = 50;
  const start = [4, 5],
    end = [10, 44];
  const dx = [1, 0, 0, -1],
    dy = [0, 1, -1, 0];

  let prev = [],
    vis = [];
  for (let i = 0; i < ROW_SIZE; i++) {
    let prevRow = [];
    let visRow = [];
    for (let j = 0; j < COLUMN_SIZE; j++) {
      prevRow.push([i, j]);
      visRow.push(0);
    }
    prev.push(prevRow);
    vis.push(visRow);
  }

  let curr = start;

  let stack = [];
  vis[curr[0]][curr[1]] = 1;
  stack.push(curr);

  while (stack.length > 0) {
    let curr = stack.pop();
    console.log(curr);
    setTimeout(() => markVisited(curr), 0);
    if (curr[0] === end[0] && curr[1] === end[1]) {
      curr = prev[curr[0]][curr[1]];
      while (true) {
        let temp = curr;
        setTimeout(() => markPath(temp), 0);
        if (curr === start) {
          break;
        }
        curr = prev[curr[0]][curr[1]];
      }
      return;
    }

    for (let i = 0; i < 4; i++) {
      let next = [curr[0] + dx[i], curr[1] + dy[i]];
      if (
        next[0] >= 0 &&
        next[0] < ROW_SIZE &&
        next[1] >= 0 &&
        next[1] < COLUMN_SIZE &&
        !board[next[0]][next[1]].isWall &&
        !board[next[0]][next[1]].isVisited &&
        !board[next[0]][next[1]].isExplored &&
        vis[next[0]][next[1]] === 0
      ) {
        vis[curr[0]][curr[1]] = 1;
        stack.push(next);
        prev[next[0]][next[1]] = curr;
        setTimeout(() => markExplored(next), 0);
      }
    }
  }
  setTimeout(() => markPath(start), 0);
}

export default DFS;
