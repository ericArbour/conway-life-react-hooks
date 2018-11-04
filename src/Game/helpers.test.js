import { isAliveNext } from "./helpers";

describe("isAliveNext", () => {
  test("If a cell is alive and has no neighbors, it will die", () => {
    const isAlive = isAliveNext(true, 0);
    expect(isAlive).toBe(false);
  });

  test("If a cell is alive and has one neighbor, it will die", () => {
    const isAlive = isAliveNext(true, 1);
    expect(isAlive).toBe(false);
  });

  test("If a cell is alive and has two neighbors, it will stay alive", () => {
    const isAlive = isAliveNext(true, 2);
    expect(isAlive).toBe(true);
  });

  test("If a cell is alive and has three neighbors, it will stay alive", () => {
    const isAlive = isAliveNext(true, 3);
    expect(isAlive).toBe(true);
  });

  test("If a cell is alive and has four neighbors, it will die", () => {
    const isAlive = isAliveNext(true, 4);
    expect(isAlive).toBe(false);
  });

  test("If a cell is alive and has five neighbors, it will die", () => {
    const isAlive = isAliveNext(true, 5);
    expect(isAlive).toBe(false);
  });

  test("If a cell is alive and has six neighbors, it will die", () => {
    const isAlive = isAliveNext(true, 6);
    expect(isAlive).toBe(false);
  });

  test("If a cell is alive and has seven neighbors, it will die", () => {
    const isAlive = isAliveNext(true, 7);
    expect(isAlive).toBe(false);
  });

  test("If a cell is alive and has eight neighbors, it will die", () => {
    const isAlive = isAliveNext(true, 8);
    expect(isAlive).toBe(false);
  });

  test("If a cell is dead and has no neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(false, 0);
    expect(isAlive).toBe(false);
  });

  test("If a cell is dead and has one neighbor, it will stay dead", () => {
    const isAlive = isAliveNext(false, 1);
    expect(isAlive).toBe(false);
  });

  test("If a cell is dead and has two neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(false, 2);
    expect(isAlive).toBe(false);
  });

  test("If a cell is dead and has three neighbors, it will come alive", () => {
    const isAlive = isAliveNext(false, 3);
    expect(isAlive).toBe(true);
  });

  test("If a cell is dead and has four neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(false, 4);
    expect(isAlive).toBe(false);
  });

  test("If a cell is dead and has five neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(false, 5);
    expect(isAlive).toBe(false);
  });

  test("If a cell is dead and has six neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(false, 6);
    expect(isAlive).toBe(false);
  });

  test("If a cell is dead and has seven neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(false, 7);
    expect(isAlive).toBe(false);
  });

  test("If a cell is dead and has eight neighbors, it will stay dead", () => {
    const isAlive = isAliveNext(false, 8);
    expect(isAlive).toBe(false);
  });

  test("If a cell has more than eight neighbors, throw error", () => {
    expect(() => isAliveNext(false, 9)).toThrowError();
  });

  test("If a cell has less than zero neighbors, throw error", () => {
    expect(() => isAliveNext(false, -1)).toThrowError();
  });
});
