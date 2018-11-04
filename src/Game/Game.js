import React, { useState, useEffect } from "react";
import IsGameRunningContext from "./IsGameRunningContext";
import Row from "../Row/Row";
import GameControl from "../GameControl/GameControl";
import { makeGrid, computeNextGeneration, isGridEmpty } from "./helpers";

export default function(props) {
  const [grid, setGrid] = useState(makeGrid(10, 10));
  const [isGameRunning, setIsGameRunning] = useState(false);
  const gameHelpers = { isGameRunning, setIsGameRunning };

  useEffect(() => {
    let intervalId;
    if (isGameRunning) {
      intervalId = setInterval(() => {
        if (isGridEmpty(grid)) {
          setIsGameRunning(false);
        }
        setGrid(computeNextGeneration(grid));
      }, 1000);
    }
    return function() {
      clearInterval(intervalId);
    };
  });

  return (
    <IsGameRunningContext.Provider value={gameHelpers}>
      <div className="game__game-container">
        {grid.map((row, index) => (
          <Row
            key={index}
            row={row}
            y={index}
            gridHelpers={{ grid, setGrid }}
          />
        ))}
      </div>
      <GameControl gameHelpers={gameHelpers} />
    </IsGameRunningContext.Provider>
  );
}
