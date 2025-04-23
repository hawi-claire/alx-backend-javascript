/**
 * Returns a string of all set values that start with a specific string
 * @param {Set} set - The set of strings
 * @param {String} startString - The starting string to filter by
 * @return {String} String of filtered values, joined by '-'
 */
const cleanSet = (set, startString) => {
  // If startString is empty, return empty string
  if (!startString || typeof startString !== 'string' || startString === '') {
    return '';
  }
  
  const filteredValues = [];
  
  // Iterate through the set
  for (const value of set) {
    // Check if the value is a string and starts with startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Append only the rest of the string (after startString)
      filteredValues.push(value.slice(startString.length));
    }
  }
  
  // Join the filtered values with '-'
  return filteredValues.join('-');
};

export default cleanSet;
