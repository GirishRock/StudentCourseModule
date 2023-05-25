import { Student } from "./entity/student.entity";
import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Patch,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCourse } from "./entity/student-course.entity";
import { Course } from "./entity/course.entity";
import { StudentDto } from "./dto/student.dto";
import { CourseDto } from "./dto/course.dto";
import { StudentCourseDto } from "./dto/student-course.dto";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(StudentCourse)
    private readonly studentCourseRepository: Repository<StudentCourse>
  ) {}

  async createStudent(studentDto: StudentDto): Promise<Student>{
    const data = await this.studentRepository.create(studentDto)
    return await this.studentRepository.save(data);
  }

  async createCourse(courseDto: CourseDto): Promise<Course>{
    const courses = await this.courseRepository.create(courseDto)
    return await this.courseRepository.save(courses)
  }

  async createStudentCourse(studentId: number, courseId: number){
    try{
      const student = await this.studentRepository.findOne({
        where: [{id: studentId}]
      });

      const course = await this.courseRepository.findOne({
        where: [{id: courseId}]
      });

      if (!student || !course) {
        throw new Error('Invalid student or course');
      }

      const studentCourse = new StudentCourse();
      studentCourse.studentId = student.id;
      studentCourse.courseId = course.id;
      const data =  await this.studentCourseRepository.save(studentCourse);
    } catch(error){
      console.error('Error creating student course:', error);
      throw error;
    }
  }

}