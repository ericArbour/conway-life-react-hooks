import React, { useContext } from "react";
import IsGameRunningContext from "../Game/IsGameRunningContext";
import { updateCell } from "../Game/helpers";

export default function({ value, x, y, gridHelpers }) {
  const { grid, setGrid } = gridHelpers;
  const { isGameRunning } = useContext(IsGameRunningContext);

  return (
    <span
      onClick={() =>
        !isGameRunning && setGrid(updateCell(grid, x, y, value ? 0 : 1))
      }
    >
      {value}
    </span>
  );
}
