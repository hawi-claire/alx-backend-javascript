export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Example of Teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Directors interface that extends Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Example of Director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface for the printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of printTeacher function
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage of printTeacher
console.log(printTeacher("John", "Doe")); // Should print "J. Doe"

// Interface for the constructor of StudentClass
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Interface for StudentClass
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of StudentClass
export class StudentClass implements IStudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}

// Function to create a student
export function createStudent(
  ctor: IStudentClassConstructor, 
  firstName: string, 
  lastName: string
): IStudentClass {
  return new ctor(firstName, lastName);
}

// Example usage of StudentClass
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Should print "Currently working"
console.log(student.displayName()); // Should print "John"
