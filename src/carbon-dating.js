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
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (sampleActivity !== /^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/g) {
    return false;
  } else {
    let k = (Math.log(2)) / HALF_LIFE_PERIOD;
    let t = (Math.log(sampleActivity / MODERN_ACTIVITY)) / k;
    return Math.ceil(Math.abs(t));
  }
}

module.exports = {
  dateSample
};
