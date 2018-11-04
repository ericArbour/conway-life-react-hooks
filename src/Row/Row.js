import React from "react";
import Cell from "../Cell/Cell";

export default function({ row, y, gridHelpers }) {
  return (
    <div>
      {row.map((value, index) => (
        <Cell
          key={index}
          value={value}
          x={index}
          y={y}
          gridHelpers={gridHelpers}
        />
      ))}
    </div>
  );
}
