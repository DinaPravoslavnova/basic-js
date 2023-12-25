/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mineSweeperGame = [],
    coordinates = {};

  for (let i = 0; i < matrix.length; i++) {
    mineSweeperGame.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      coordinates[`${i}${j}`] = 0;
      mineSweeperGame[i].push([]);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        coordinates[`${i - 1}${j - 1}`]++;
        coordinates[`${i - 1}${j}`]++;
        coordinates[`${i - 1}${j + 1}`]++;

        coordinates[`${i}${j - 1}`]++;
        coordinates[`${i}${j + 1}`]++;

        coordinates[`${i + 1}${j - 1}`]++;
        coordinates[`${i + 1}${j}`]++;
        coordinates[`${i + 1}${j + 1}`]++;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      mineSweeperGame[i][j] = coordinates[`${i}${j}`];
    }
  }

  return mineSweeperGame;
}

module.exports = {
  minesweeper,
};
