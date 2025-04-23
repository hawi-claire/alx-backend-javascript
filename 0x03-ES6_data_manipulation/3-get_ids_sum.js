/**
 * Function that returns the sum of all student ids
 * @param {Array} students - Array of student objects
 * @return {Number} Sum of all student ids
 */
const getStudentIdsSum = (students) => {
  // Use reduce to accumulate the sum of all student ids
  return students.reduce((total, student) => total + student.id, 0);
};

export default getStudentIdsSum;
