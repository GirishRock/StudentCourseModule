import { StudentService } from "./student.service";
import {
  Body,
  Param,
  Controller,
  Get,
  Post
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { StudentDto } from "./dto/student.dto";
import { CourseDto } from "./dto/course.dto";
import { StudentCourseDto } from "./dto/student-course.dto";

@Controller('students')
export class StudentController {
  constructor(
    private studentService: StudentService,
  ) {}

  @Post('/newStudent')
  async createStudentDetails(
    @Body() studentDto: StudentDto) {
    const results = await this.studentService.createStudent(studentDto);
    return {
      status: true,
      message: 'Student created successfully',
      data: results
    }
  }

  @Post('/newCourse')
  async createCourseDetails(
    @Body() courseDto: CourseDto) {
   const results = await this.studentService.createCourse(courseDto);
    return {
      status: true,
      message: 'Course created successfully',
      data: results
    }
  }

  @Post('/studentCourse')
  async createStudentCourse(
      @Body() studentCourseDto: StudentCourseDto
      ) {
        const { studentId, courseId } = studentCourseDto;
        const results =  await this.studentService.createStudentCourse(studentId, courseId);
        return {
          status: true,
          message: 'Student Id and course Id created successfully',
          data: results
        }
    
    }
}