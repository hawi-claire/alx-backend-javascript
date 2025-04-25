export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "San Francisco"
};

// Create an array named studentsList containing the two students
export const studentsList: Array<Student> = [student1, student2];

/**
 * Renders a table with student information
 * @param students - Array of Student objects to display
 */
export function renderTable(students: Array<Student>): void {
  // Create table element
  const table = document.createElement('table');
  
  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create table body
  const tbody = document.createElement('tbody');
  
  // Add rows for each student
  students.forEach((student: Student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  
  // Add table to the document body
  document.body.appendChild(table);
}

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  renderTable(studentsList);
});
