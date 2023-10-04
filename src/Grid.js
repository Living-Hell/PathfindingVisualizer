import React, { useState } from "react";
import board from "./Board";
import Node from "./Node";
import dijkstra from "./Dijkstra";
import BestFirstSearch from "./BestFirstSearch";
import Astar from "./Astar";
import DFS from "./DFS";

const ROW_SIZE = 15;
const COLUMN_SIZE = 50;

export default function Grid() {
  const [boardState, setBoardState] = useState(board);
  const [test, setTest] = useState(0);
  const [bool, setBool] = useState(false);
  const [visualizeBool, setVisualizeBool] = useState(true);
  const [resetBool, setResetBool] = useState(true);

  const handleNodeClick = ([row, col]) => {
    if (board[row][col].isStart || board[row][col].isEnd || !visualizeBool) {
      return;
    }
    if (
      row === 0 ||
      col === 0 ||
      row === ROW_SIZE - 1 ||
      col === COLUMN_SIZE - 1
    ) {
      return;
    }
    board[row][col].isWall ^= true;
    setBoardState(board);
    setTest(Math.random());
  };

  const markVisited = ([row, col]) => {
    if (board[row][col].isStart || board[row][col].isEnd) {
      return;
    }
    board[row][col].isExplored = false;
    board[row][col].isVisited = true;
    board[row][col].isPath = false;
    setBoardState(board);
    setTest(Math.random());
    setVisualizeBool(false);
    setResetBool(false);
  };

  const markExplored = ([row, col]) => {
    if (board[row][col].isStart || board[row][col].isEnd) {
      return;
    }
    board[row][col].isExplored = true;
    board[row][col].isVisited = false;
    board[row][col].isPath = false;
    setBoardState(board);
    setTest(Math.random());
    setVisualizeBool(false);
    setResetBool(false);
  };

  const markPath = ([row, col]) => {
    if (board[row][col].isStart || board[row][col].isEnd) {
      setResetBool(true);
      return;
    }
    board[row][col].isExplored = false;
    board[row][col].isVisited = false;
    board[row][col].isPath = true;
    setBoardState(board);
    setTest(Math.random());
    setVisualizeBool(false);
    setResetBool(false);
  };

  const resetBoard = () => {
    const ROW_SIZE = 15;
    const COLUMN_SIZE = 50;

    for (let i = 0; i < ROW_SIZE; i++) {
      for (let j = 0; j < COLUMN_SIZE; j++) {
        board[i][j] = {
          row: i,
          col: j,
          isWall:
            i === 0 || i === ROW_SIZE - 1 || j === 0 || j === COLUMN_SIZE - 1,
          isStart: false,
          isEnd: false,
          isExplored: false,
          isVisited: false,
          isPath: false,
        };
      }
    }

    board[4][5].isStart = true;
    board[10][44].isEnd = true;

    setBoardState(board);
    setTest(Math.random());
    setVisualizeBool(true);
  };

  return (
    <div className="grid">
      <h1 style={{ display: "none" }}>{test}</h1>
      {boardState.map((ROW, row) => {
        return (
          <div className="row" key={row}>
            {ROW.map((el, col) => {
              return (
                <Node
                  key={[row, col]}
                  isWall={el.isWall}
                  isVisited={el.isVisited}
                  isExplored={el.isExplored}
                  isStart={el.isStart}
                  isEnd={el.isEnd}
                  isPath={el.isPath}
                  row={row}
                  col={col}
                  handleNodeClick={handleNodeClick}
                  bool={bool}
                  setBool={setBool}
                />
              );
            })}
          </div>
        );
      })}
      <div className="buttons">
        <button
          onClick={() =>
            visualizeBool && Astar(board, markVisited, markExplored, markPath)
          }
          className="visualize"
        >
          Visualize A*
        </button>
        <button
          onClick={() =>
            visualizeBool &&
            dijkstra(board, markVisited, markExplored, markPath)
          }
          className="visualize"
        >
          Visualize Dijkstra
        </button>
        <button
          onClick={() =>
            visualizeBool &&
            BestFirstSearch(board, markVisited, markExplored, markPath)
          }
          className="visualize"
        >
          Visualize Greedy Best First Search
        </button>
        <button
          onClick={() =>
            visualizeBool && DFS(board, markVisited, markExplored, markPath)
          }
          className="visualize"
        >
          Visualize DFS
        </button>
        <button
          onClick={() => resetBool && resetBoard(board)}
          className="visualize"
        >
          Reset Board
        </button>
      </div>
    </div>
  );
}
