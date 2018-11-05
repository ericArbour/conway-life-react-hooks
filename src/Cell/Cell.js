import React, { useContext } from 'react';
import IsGameRunningContext from '../utilities/IsGameRunningContext';
import { updateCell } from '../utilities/helpers';
import './Cell.css';

export default function({ value, x, y, gridHelpers }) {
  const { grid, setGrid } = gridHelpers;
  const { isGameRunning } = useContext(IsGameRunningContext);

  return (
    <td
      className={value ? 'active' : ''}
      onClick={() =>
        !isGameRunning && setGrid(updateCell(grid, x, y, value ? 0 : 1))
      }
    />
  );
}
