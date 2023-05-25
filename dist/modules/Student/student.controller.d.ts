import { StudentService } from "./student.service";
import { StudentDto } from "./dto/student.dto";
import { CourseDto } from "./dto/course.dto";
import { StudentCourseDto } from "./dto/student-course.dto";
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    createStudentDetails(studentDto: StudentDto): Promise<{
        status: boolean;
        message: string;
        data: import("./entity/student.entity").Student;
    }>;
    createCourseDetails(courseDto: CourseDto): Promise<{
        status: boolean;
        message: string;
        data: import("./entity/course.entity").Course;
    }>;
    createStudentCourse(studentCourseDto: StudentCourseDto): Promise<{
        status: boolean;
        message: string;
        data: void;
    }>;
}
