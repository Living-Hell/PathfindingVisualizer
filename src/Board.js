const board = [];
const ROW_SIZE = 15;
const COLUMN_SIZE = 50;

for (let i = 0; i < ROW_SIZE; i++) {
  const ROW = [];
  for (let j = 0; j < COLUMN_SIZE; j++) {
    ROW.push({
      row: i,
      col: j,
      isWall: i === 0 || i === ROW_SIZE - 1 || j === 0 || j === COLUMN_SIZE - 1,
      isStart: false,
      isEnd: false,
      isExplored: false,
      isVisible: false,
      isPath: false,
    });
  }
  board.push(ROW);
}

board[4][5].isStart = true;
board[10][44].isEnd = true;

export default board;
