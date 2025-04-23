/**
 * WeakMap to track the number of API calls for each endpoint
 */
export const weakMap = new WeakMap();

/**
 * Tracks and manages API calls to endpoints
 * @param {Object} endpoint - The API endpoint object with protocol and name
 * @throws {Error} If the endpoint has been queried 5 or more times
 */
export function queryAPI(endpoint) {
  // Get the current count for this endpoint or initialize to 0
  const count = weakMap.get(endpoint) || 0;
  
  // Increment the count
  const newCount = count + 1;
  
  // Update the count in the WeakMap
  weakMap.set(endpoint, newCount);
  
  // Throw an error if the endpoint has been queried 5 or more times
  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
