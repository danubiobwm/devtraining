import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses:Course[] = [
    {
      id: 1,
      name: 'JS-CURSOS',
      description: 'Js cursos master',
      tags: ['node.js', 'nest.js'],
    }
  ];

  fitAll() {
    return this.courses;
  }
  fitOne(id: string) {
    return this.courses.find((course)=>course.id === Number(id));
  }
  create(createCourseDto: any) {
    return this.courses.push(createCourseDto);
  }
  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course:Course)=>course.id===Number(id)
    );
    return this.courses[indexCourse]=updateCourseDto;
  }
  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course:Course)=>course.id===Number(id)
    );
    if(indexCourse>=0){
      this.courses.splice(indexCourse, -1);
    }
  }

}


