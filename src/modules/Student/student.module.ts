import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./entity/student.entity";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";
import { Module } from "@nestjs/common";
import { Course } from "./entity/course.entity";
import { StudentCourse } from "./entity/student-course.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Student, Course, StudentCourse
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
  export class StudentModule {}