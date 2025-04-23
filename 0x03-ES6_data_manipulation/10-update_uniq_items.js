/**
 * Updates the quantity to 100 for all items with quantity of 1
 * @param {Map} map - The map of items to update
 * @throws {Error} If the argument is not a Map
 * @return {Map} The updated map
 */
const updateUniqueItems = (map) => {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  
  // Iterate through the map
  for (const [key, value] of map.entries()) {
    // Update items with quantity 1 to 100
    if (value === 1) {
      map.set(key, 100);
    }
  }
  
  return map;
};

export default updateUniqueItems;
