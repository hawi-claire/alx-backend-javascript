/// <reference path="./Subject.ts" />

namespace Subjects {
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }
    
    getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      
      if (!teacher || teacher.experienceTeachingC === undefined || teacher.experienceTeachingC <= 0) {
        return 'No available teacher';
      }
      
      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
