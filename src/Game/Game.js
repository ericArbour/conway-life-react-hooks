import React, { useState, useEffect } from 'react';
import IsGameRunningContext from '../utilities/IsGameRunningContext';
import Row from '../Row/Row';
import GameControl from '../GameControl/GameControl';
import {
  makeGrid,
  computeNextGeneration,
  isGridEmpty
} from '../utilities/helpers';
import './Game.css';

export default function(props) {
  const [grid, setGrid] = useState(makeGrid(10, 10));
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [speed, setSpeed] = useState(0);
  const gridHelpers = { grid, setGrid };
  const gameHelpers = { isGameRunning, setIsGameRunning };
  const speedHelpers = { speed, setSpeed };

  useEffect(() => {
    let intervalId;
    if (isGameRunning) {
      intervalId = setInterval(() => {
        if (isGridEmpty(grid)) {
          setIsGameRunning(false);
        }
        setGrid(computeNextGeneration(grid));
      }, 1000 - speed);
    }
    return function() {
      clearInterval(intervalId);
    };
  });

  return (
    <IsGameRunningContext.Provider value={gameHelpers}>
      <h2>Conway's Game of Life</h2>
      <table className="game__game-container">
        <tbody>
          {grid.map((row, index) => (
            <Row
              key={index}
              row={row}
              y={index}
              gridHelpers={{ grid, setGrid }}
            />
          ))}
        </tbody>
      </table>
      <GameControl
        gameHelpers={gameHelpers}
        gridHelpers={gridHelpers}
        speedHelpers={speedHelpers}
      />
    </IsGameRunningContext.Provider>
  );
}
