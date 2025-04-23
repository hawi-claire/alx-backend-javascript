/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position
 * @param {Number} length - The length of the ArrayBuffer
 * @param {Number} position - The position to add the value
 * @param {Number} value - The value to add
 * @return {DataView} DataView of the ArrayBuffer
 * @throws {Error} If position is outside range
 */
const createInt8TypedArray = (length, position, value) => {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  
  // Create a DataView to manipulate the buffer
  const dataView = new DataView(buffer);
  
  // Check if the position is within the buffer's range
  if (position >= length) {
    throw new Error('Position outside range');
  }
  
  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);
  
  return dataView;
};

export default createInt8TypedArray;
