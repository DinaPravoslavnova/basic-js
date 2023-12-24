/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const digitsArray = n.toString().split('');
  let sumDigits = 0;

  for (let i = 0; i < digitsArray.length; i++) {
    sumDigits += Number(digitsArray[i]);
  }

  if (sumDigits < 10) {
    return sumDigits;
  } else {
    return getSumOfDigits(sumDigits);
  }
}

module.exports = {
  getSumOfDigits,
};
