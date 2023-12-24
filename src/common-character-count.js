/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const object1 = {};

  for (let i = 0; i < s1.length; i++) {
    if (object1[s1[i]]) {
      object1[s1[i]] += 1;
    } else {
      object1[s1[i]] = 1;
    }
  }

  const object2 = {};

  for (let i = 0; i < s2.length; i++) {
    if (object2[s2[i]]) {
      object2[s2[i]] += 1;
    } else {
      object2[s2[i]] = 1;
    }
  }

  let sum = 0;

  for (let key in object1) {
    if (object2[key]) {
      if (object1[key] < object2[key]) {
        sum += object1[key];
      } else {
        sum += object2[key];
      }
    }
  }

  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
