/**
 * Returns a map of groceries with items and quantities
 * @return {Map} A map of grocery items and their quantities
 */
const groceriesList = () => {
  const groceriesMap = new Map();
  
  groceriesMap.set('Apples', 10);
  groceriesMap.set('Tomatoes', 10);
  groceriesMap.set('Pasta', 1);
  groceriesMap.set('Rice', 1);
  groceriesMap.set('Banana', 5);
  
  return groceriesMap;
};

export default groceriesList;
