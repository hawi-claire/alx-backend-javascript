export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface with expected methods
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Factory function to create either a Director or Teacher based on salary
export function createEmployee(salary: number | string): Director | Teacher {
  // Convert string salary to number if it's a string
  if (typeof salary === 'string') {
    const numericSalary = parseFloat(salary.replace(/[^0-9.-]+/g, ''));
    return new Director();
  }
  
  // Return Teacher if salary is less than 500, otherwise return Director
  return salary < 500 ? new Teacher() : new Director();
}

// Type predicate to check if employee is a Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test cases for employee creation and work execution
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));    // Should print "Getting to work"
console.log(executeWork(createEmployee(1000)));   // Should print "Getting to director tasks"

// String literal type for subjects
export type Subjects = 'Math' | 'History';

// Function to teach class based on subject
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    // This will cause a compilation error due to the string literal type
    return 'Invalid subject';
  }
}

// Test cases for teaching classes
console.log(teachClass('Math'));       // Should print "Teaching Math"
console.log(teachClass('History'));    // Should print "Teaching History"
