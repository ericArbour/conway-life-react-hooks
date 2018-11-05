export function isAliveNext(isAlive, neighbors = 0) {
  if (neighbors < 0 || neighbors > 8) throw new Error("Invalid neighbor count");

  if (isAlive && (neighbors < 2 || neighbors > 3)) return 0;

  if (!isAlive && neighbors === 3) return 1;

  return isAlive;
}

export function makeGrid(rows, columns) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
}

export function findCell(grid = [[]], x, y) {
  if (x < 0 || y < 0 || y >= grid.length || x >= grid[0].length) return 0;
  return grid[y][x];
}

export function countNeighbors(grid, x, y) {
  return [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1]
  ].reduce((acc, args) => findCell(grid, ...args) + acc, 0);
}

export function computeNextGeneration(grid = [[]]) {
  return grid.map((row, y) =>
    row.map((cell, x) => isAliveNext(cell, countNeighbors(grid, x, y)))
  );
}

export function updateCell(grid, x, y, value) {
  if (x < 0 || y < 0 || y >= grid.length || x >= grid[0].length)
    throw new Error("range out of bounds");

  return grid.map((row, currentY) =>
    row.map((cell, currentX) => {
      if (x === currentX && y === currentY) return value;
      return cell;
    })
  );
}

export function isGridEmpty(grid) {
  return !grid.reduce(
    (total, row) => total + row.reduce((rowTotal, cell) => rowTotal + cell),
    0
  );
}
