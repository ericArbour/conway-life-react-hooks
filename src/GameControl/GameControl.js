import React from 'react';
import { makeGrid } from '../utilities/helpers';
import './GameControl.css';

export default function({ gameHelpers, gridHelpers, speedHelpers }) {
  const { isGameRunning, setIsGameRunning } = gameHelpers;
  const { speed, setSpeed } = speedHelpers;
  const { grid, setGrid } = gridHelpers;

  return (
    <div className="game-control__container">
      <label>
        Grid
        <input
          type="range"
          min="10"
          max="16"
          value={grid.length}
          onChange={({ target }) => {
            const { value } = target;
            const rounded = Math.floor(value);
            setGrid(makeGrid(rounded, rounded));
          }}
        />
      </label>
      <button onClick={() => setIsGameRunning(!isGameRunning)}>
        {isGameRunning ? 'Pause' : 'Play'}
      </button>
      <button onClick={() => setGrid(makeGrid(grid.length, grid.length))}>
        Clear
      </button>
      <label>
        Speed
        <input
          type="range"
          min="0"
          max="900"
          value={speed}
          onChange={e => setSpeed(e.target.value)}
        />
      </label>
    </div>
  );
}
