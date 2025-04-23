/**
 * Function that returns an array of student objects located in a specific city
 * @param {Array} students - Array of student objects
 * @param {String} city - City to filter by
 * @return {Array} Array of student objects in the specified city
 */
const getStudentsByLocation = (students, city) => {
  // Use filter to return only students whose location matches the specified city
  return students.filter((student) => student.location === city);
};

export default getStudentsByLocation;
