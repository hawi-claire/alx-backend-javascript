/**
 * Function that returns a list of students
 * @return {Array} Array of objects with student information
 */
const getListStudents = () => {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];
};

export default getListStudents;
