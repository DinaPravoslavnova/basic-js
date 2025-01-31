/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let firstLettersName = '';

  if (!Array.isArray(members)) return false;

  members.forEach((element) => {
    if (typeof element === 'string') {
      firstLettersName += element.trim()[0];
    }
  });

  dreamTeamName = firstLettersName.toUpperCase().split('').sort().join('');

  return dreamTeamName;
}

module.exports = {
  createDreamTeam,
};
