export function isAliveNext(isAlive, neighbors = 0) {
  if (neighbors < 0 || neighbors > 8) throw new Error("Invalid neighbor count");

  if (isAlive && (neighbors < 2 || neighbors > 3)) return !isAlive;

  if (!isAlive && neighbors === 3) return !isAlive;

  return isAlive;
}
