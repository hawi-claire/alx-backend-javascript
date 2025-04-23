/**
 * Function that returns an array of ids from a list of student objects
 * @param {Array} studentList - Array of student objects
 * @return {Array} Array containing only the ids of the students
 */
const getListStudentIds = (studentList) => {
  // Check if the input is an array, if not return an empty array
  if (!Array.isArray(studentList)) {
    return [];
  }
  
  // Use map to extract just the id from each student object
  return studentList.map((student) => student.id);
};

export default getListStudentIds;
