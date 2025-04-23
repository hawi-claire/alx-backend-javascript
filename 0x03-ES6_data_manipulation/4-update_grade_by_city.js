/**
 * Function that returns an array of students for a specific city with their new grades
 * @param {Array} students - Array of student objects
 * @param {String} city - City to filter by
 * @param {Array} newGrades - Array of grade objects {studentId, grade}
 * @return {Array} Array of student objects with updated grades
 */
const updateStudentGradeByCity = (students, city, newGrades) => {
  // First filter students by city
  return students
    .filter((student) => student.location === city)
    // Then map through the filtered students to add or update grades
    .map((student) => {
      // Find the grade object for this student (if it exists)
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      
      // Create a new object with all the student properties
      // and add the grade property (or 'N/A' if no grade found)
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
};

export default updateStudentGradeByCity;
