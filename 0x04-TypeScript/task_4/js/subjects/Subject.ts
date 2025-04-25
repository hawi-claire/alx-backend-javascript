/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    private teacher: Teacher | undefined;
    
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
    
    getTeacher(): Teacher | undefined {
      return this.teacher;
    }
  }
}
