const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = n.toString();
  let maximalNumber = 0;

  for (i = 0; i < string.length; i++) {
    const leftPart = string.slice(0, i);
    const rightPart = string.slice(i + 1);
    const newNumber = Number(leftPart + rightPart);

    if (newNumber > maximalNumber) {
      maximalNumber = newNumber;
    }
  }

  return maximalNumber;
}

module.exports = {
  deleteDigit,
};
