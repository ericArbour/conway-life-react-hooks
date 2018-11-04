import React from "react";

export default function({ gameHelpers }) {
  const { isGameRunning, setIsGameRunning } = gameHelpers;
  return (
    <div onClick={() => setIsGameRunning(!isGameRunning)}>
      {isGameRunning ? "Pause" : "Play"}
    </div>
  );
}
