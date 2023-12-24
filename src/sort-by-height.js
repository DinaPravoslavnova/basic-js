const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const heightsArray = arr.filter((value) => value !== -1);
  const heightsSortArray = heightsArray.sort((a, b) => a - b);

  const resultArray = arr.map((value) => {
    if (value !== -1) {
      return heightsSortArray.shift();
    } else {
      return -1;
    }
  });

  return resultArray;
}

module.exports = {
  sortByHeight,
};
