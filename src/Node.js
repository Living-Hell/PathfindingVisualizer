import React from "react";

export default function Node(el) {
  return (
    <div
      className={
        el.isWall
          ? "node wall"
          : el.isStart
          ? "node start"
          : el.isEnd
          ? "node end"
          : el.isPath
          ? "node path"
          : el.isExplored
          ? "node explored"
          : el.isVisited
          ? "node visited"
          : "node"
      }
      onClick={() => el.handleNodeClick([el.row, el.col])}
      onMouseDown={() => el.setBool(true)}
      onMouseEnter={() => el.bool && el.handleNodeClick([el.row, el.col])}
      onMouseUp={() => el.setBool(false)}
    ></div>
  );
}
