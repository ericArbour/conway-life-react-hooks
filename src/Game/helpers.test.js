import {
  isAliveNext,
  makeGrid,
  findCell,
  countNeighbors,
  computeNextGeneration,
  updateCell,
  isGridEmpty
} from "./helpers";

describe("isAliveNext", () => {
  test("If a cell is alive and has no neighbors, it will die", () => {
    const isAlive = isAliveNext(1, 0);
    expect(isAlive).toBe(0);
  });

  test("If a cell is alive and has one neighbor, it will die", () => {
    const isAlive = isAliveNext(1, 1);
    expect(isAlive).toBe(0);
  });

  test("If a cell is alive and has two neighbors, it will stay alive", () => {
    const isAlive = isAliveNext(1, 2);
    expect(isAlive).toBe(1);
  });

  test("If a cell is alive and has three neighbors, it will stay alive", () => {
    const isAlive = isAliveNext(1, 3);
    expect(isAlive).toBe(1);
  });

  test("If a cell is alive and has four neighbors, it will die", () => {
    const isAlive = isAliveNext(1, 4);
    expect(isAlive).toBe(0);
  });

  test("If a cell is alive and has five neighbors, it will die", () => {
    const isAlive = isAliveNext(1, 5);
    expect(isAlive).toBe(0);
  });

  test("If a cell is alive and has six neighbors, it will die", () => {
    const isAlive = isAliveNext(1, 6);
    expect(isAlive).toBe(0);
  });

  test("If a cell is alive and has seven neighbors, it will die", () => {
    const isAlive = isAliveNext(1, 7);
    expect(isAlive).toBe(0);
  });

  test("If a cell is alive and has eight neighbors, it will die", () => {
    const isAlive = isAliveNext(1, 8);
    expect(isAlive).toBe(0);
  });

  test("If a cell is dead and has no neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(0, 0);
    expect(isAlive).toBe(0);
  });

  test("If a cell is dead and has one neighbor, it will stay dead", () => {
    const isAlive = isAliveNext(0, 1);
    expect(isAlive).toBe(0);
  });

  test("If a cell is dead and has two neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(0, 2);
    expect(isAlive).toBe(0);
  });

  test("If a cell is dead and has three neighbors, it will come alive", () => {
    const isAlive = isAliveNext(0, 3);
    expect(isAlive).toBe(1);
  });

  test("If a cell is dead and has four neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(0, 4);
    expect(isAlive).toBe(0);
  });

  test("If a cell is dead and has five neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(0, 5);
    expect(isAlive).toBe(0);
  });

  test("If a cell is dead and has six neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(0, 6);
    expect(isAlive).toBe(0);
  });

  test("If a cell is dead and has seven neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(0, 7);
    expect(isAlive).toBe(0);
  });

  test("If a cell is dead and has eight neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(0, 8);
    expect(isAlive).toBe(0);
  });

  test("If a cell has more than eight neighbors, throw error", () => {
    expect(() => isAliveNext(0, 9)).toThrowError();
  });

  test("If a cell has less than zero neighbors, throw error", () => {
    expect(() => isAliveNext(0, -1)).toThrowError();
  });
});

const startingGrid = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
const gridWithOneUpdate = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
const filledInGrid = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0]
];
const nextGenGrid = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0]
];

describe("makeGrid", () => {
  test("can make a 5x5 grid", () => {
    expect(makeGrid(5, 5)).toEqual(startingGrid);
  });
});

describe("findCell", () => {
  test("finds the expected cell", () => {
    expect(findCell(startingGrid, 2, 1)).toBe(0);
  });

  test("finds the expected cell", () => {
    expect(findCell(filledInGrid, 1, 1)).toBe(1);
  });

  test("returns 0 for nonexistent cell", () => {
    expect(findCell(filledInGrid, -1, 100)).toBe(0);
  });

  test("returns 0 for nonexistent cell", () => {
    expect(findCell(filledInGrid, 100, -1)).toBe(0);
  });
});

describe("count neighbors", () => {
  test("counts neighbors as expected", () => {
    expect(countNeighbors(startingGrid, 0, 0)).toBe(0);
  });
  test("counts neighbors as expected", () => {
    expect(countNeighbors(startingGrid, -1, 100)).toBe(0);
  });
  test("counts neighbors as expected", () => {
    expect(countNeighbors(startingGrid, 100, -1)).toBe(0);
  });
  test("counts neighbors as expected", () => {
    expect(countNeighbors(filledInGrid, 1, 0)).toBe(1);
  });
  test("counts neighbors as expected", () => {
    expect(countNeighbors(filledInGrid, 3, 2)).toBe(5);
  });
});

describe("computeNextGeneration", () => {
  test("all 0s grid stays the same", () => {
    expect(computeNextGeneration(startingGrid)).toEqual(startingGrid);
  });

  test("existing grid transformation obeys expected rules", () => {
    expect(computeNextGeneration(filledInGrid)).toEqual(nextGenGrid);
  });
});

describe("updateCell", () => {
  test("updates as expected", () => {
    expect(updateCell(startingGrid, 1, 1, 1)).toEqual(gridWithOneUpdate);
  });
  test("updates as expected", () => {
    expect(updateCell(gridWithOneUpdate, 1, 1, 0)).toEqual(startingGrid);
  });
  test("throws error on invalid update", () => {
    expect(() => updateCell(startingGrid, 5, 5, 1)).toThrowError();
  });
  test("throws error on invalid update", () => {
    expect(() => updateCell(startingGrid, -1, -1, 0)).toThrowError();
  });
});

describe("isGridEmpty", () => {
  test("empty grid returns true", () => {
    expect(isGridEmpty(startingGrid)).toBe(true);
  });

  test("non empty grid returns false", () => {
    expect(isGridEmpty(filledInGrid)).toBe(false);
  });

  test("non empty grid returns false", () => {
    expect(isGridEmpty(nextGenGrid)).toBe(false);
  });
});
