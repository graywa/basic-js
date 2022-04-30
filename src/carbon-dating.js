const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  if(typeof str !== 'string') return false;
  if(Number(str) % Number(str) !== 0) return false
  if(0 > Number(str) || Number(str) > 15) return false;


  const HALF_LIFE_PERIOD = 5.73e3;
  const INIT_ACTIVITY = 15;
  const k = 0.693/HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(INIT_ACTIVITY/Number(str))/k)
}

module.exports = {
  dateSample
};
