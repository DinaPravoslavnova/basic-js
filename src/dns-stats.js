const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};

  for (let i = 0; i < domains.length; i++) {
    const split = domains[i].split('.');

    let domain = '';

    for (let j = split.length - 1; j >= 0; j--) {
      domain += '.' + split[j];

      if (dns[domain]) {
        dns[domain] += 1;
      } else {
        dns[domain] = 1;
      }
    }
  }

  return dns;
}

module.exports = {
  getDNSStats,
};
