import React from "react";

import "./Node.css";


const Node = React.memo(   
  ({ col, isFinish, isStart, isWall, row, isVisited }) => {
    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : isVisited
      ? "node-visited"
      : "";

   
    return (
      <div id={`node-${row}-${col}`} className={`node ${extraClassName}`}></div>
    );
  }
);

export default Node;
