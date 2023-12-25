/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultEncodeLine = '',
    countSimilarChar = 1;

  if (str.length === 0) return str;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      countSimilarChar++;
    } else {
      if (countSimilarChar > 1) {
        resultEncodeLine += countSimilarChar.toString() + str[i];
        countSimilarChar = 1;
      } else {
        resultEncodeLine += str[i];
        countSimilarChar = 1;
      }
    }
  }

  return resultEncodeLine;
}

module.exports = {
  encodeLine,
};
