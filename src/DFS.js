const ROW_SIZE = 15;
const COLUMN_SIZE = 50;
const start = [7, 10],
  end = [7, 40];
const dx = [1, 0, -1, 0],
  dy = [0, 1, 0, -1];

let prev = [];
for (let i = 0; i < ROW_SIZE; i++) {
  let prevRow = [];
  for (let j = 0; j < COLUMN_SIZE; j++) {
    prevRow.push([i, j]);
  }
  prev.push(prevRow);
}

const DFS = (board, markVisited, markExplored, markPath, curr = start) => {
  if (curr[0] === end[0] && curr[1] === end[1]) {
    while (!(curr[0] === start[0] && curr[1] === start[1])) {
      let temp = curr;
      setTimeout(() => markPath(temp), 0);
      curr = prev[curr[0]][curr[1]];
    }
    return true;
  }
  setTimeout(() => markVisited(curr), 0);
  for (let i = 0; i < 4; i++) {
    let next = [curr[0] + dx[i], curr[1] + dy[i]];
    if (
      next[0] >= 0 &&
      next[0] < ROW_SIZE &&
      next[1] >= 0 &&
      next[1] < COLUMN_SIZE &&
      !board[next[0]][next[1]].isWall &&
      !board[next[0]][next[1]].isVisited
    ) {
      prev[next[0]][next[1]] = curr;
      board[next[0]][next[1]].isVisited = true;
      if (DFS(board, markVisited, markExplored, markPath, next)) {
        return true;
      }
    }
  }
  return false;
};

export default DFS;
