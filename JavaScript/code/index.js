/**
 * @param {number} num
 * @param {string[]} plate
 * @return {number[][]}
 */
var ballGame = function (num, plate) {
  const result = [];

  for (let i = 1; i < plate[0].length - 1; i++) {
    if (testXY(i, 0, 2, num, plate)) {
      result.push([0, i]);
    }
    if (testXY(i, plate.length - 1, 0, num, plate)) {
      result.push([plate.length - 1, i]);
    }
  }

  for (let i = 1; i < plate.length - 1; i++) {
    if (testXY(0, i, 1, num, plate)) {
      result.push([i, 0]);
    }
    if (testXY(plate[0].length - 1, i, 3, num, plate)) {
      result.push([i, plate[0].length - 1]);
    }
  }

  return result;
};
// 0上,1右,2下,3左
function testXY(x, y, direction, step, plate) {
  if (plate[y]?.[x] === "O" || plate[y]?.[x] === "E" || plate[y]?.[x] === "W")
    return false;
  for (let i = 0; i <= step; i++) {
    if (plate[y]?.[x] === undefined) {
      return false;
    } else if (plate[y][x] === "E") {
      direction = direction === 3 ? 0 : direction + 1;
    } else if (plate[y][x] === "W") {
      direction = direction === 0 ? 3 : direction - 1;
    } else if (plate[y][x] === "O") {
      return true;
    }

    // 走一步
    switch (direction) {
      case 0:
        y--;
        break;
      case 2:
        y++;
        break;
      case 3:
        x--;
        break;
      case 1:
        x++;
    }
  }
  return false;
}

console.log(
  ballGame(41, [
    "E...W..WW",
    ".E...O...",
    "...WO...",
    "..OWW.O..",
    ".W.WO.W.E",
    "O..O.W...",
    ".OO...W..",
    "..EW.WEE.",
  ])
);
