/**
 * Checks if all elements in the array exist within the set
 * @param {Set} set - The set to check against
 * @param {Array} array - The array of values to check
 * @return {Boolean} True if all elements exist in the set, false otherwise
 */
const hasValuesFromArray = (set, array) => {
  return array.every((value) => set.has(value));
};

export default hasValuesFromArray;
