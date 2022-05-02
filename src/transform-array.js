const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const modArr = [...arr];

  for (let i = 0; i < modArr.length; i++) {
    if(modArr[i] === '--discard-next' && i !== (modArr.length - 1) && Number.isInteger(modArr[i + 1])) {
      modArr.splice(i + 1, 1);
      i--;
    };
    if(modArr[i] === '--discard-prev' && i !== 0 && Number.isInteger(modArr[i - 1]))  {
      modArr.splice(i - 1 , 1);
      i--;
    };    
    if(modArr[i] === '--double-next' && i !== (modArr.length - 1) && Number.isInteger(modArr[i + 1])) {
      modArr.splice(i + 1, 0, modArr[i + 1]);
      i++
    };    
    if(modArr[i] === '--double-prev' && i !== 0 && Number.isInteger(modArr[i - 1])) {      
      modArr.splice(i - 1, 0, modArr[i - 1]);
      i++
    };    
  } 

  for(let i = 0; i < modArr.length; i++) {
    if (modArr[i] === '--discard-next' || modArr[i] === '--discard-prev' || modArr[i] === '--double-next' || modArr[i] === '--double-prev') {
      modArr.splice(i, 1);
      i--;
    }
  }

  return modArr;
}

module.exports = {
  transform
};
