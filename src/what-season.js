const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';  

  try {
    date = new Date(date.getTime());
    const month = date.getMonth();   
    //if (!(month < 12)) throw new Error('Invalid date!');
    if (month <= 1 || month >= 11) return 'winter';
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
  } catch {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
