function BestFirstSearch(board, markVisited, markExplored, markPath) {
  const ROW_SIZE = 15;
  const COLUMN_SIZE = 50;
  const start = [4, 5],
    end = [10, 44];
  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];

  function distance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  let dist = [],
    prev = [];
  for (let i = 0; i < ROW_SIZE; i++) {
    let distRow = [],
      prevRow = [];
    for (let j = 0; j < COLUMN_SIZE; j++) {
      distRow.push(Infinity);
      prevRow.push([i, j]);
    }
    dist.push(distRow);
    prev.push(prevRow);
  }

  dist[start[0]][start[1]] = 0;

  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    let sz = queue.length;
    const [x1, y1] = queue[0];
    let dis = distance(x1, y1, end[0], end[1]);
    let index = 0;
    for (let j = 1; j < sz; j++) {
      let [x1, y1] = queue[j];
      if (dis > distance(x1, y1, end[0], end[1])) {
        dis = distance(x1, y1, end[0], end[1]);
        index = j;
      }
    }
    let temp = queue[0];
    queue[0] = queue[index];
    queue[index] = temp;
    let curr = queue.shift();
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
        dist[next[0]][next[1]] > 1 + dist[curr[0]][curr[1]]
      ) {
        queue.push(next);
        prev[next[0]][next[1]] = curr;
        dist[next[0]][next[1]] = 1 + dist[curr[0]][curr[1]];
        setTimeout(() => markExplored(next), 0);
      }
    }
  }
  setTimeout(() => markPath(start), 0);
}

export default BestFirstSearch;
