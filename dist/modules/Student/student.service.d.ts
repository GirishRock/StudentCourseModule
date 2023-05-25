import { Student } from "./entity/student.entity";
import { Repository } from 'typeorm';
import { StudentCourse } from "./entity/student-course.entity";
import { Course } from "./entity/course.entity";
import { StudentDto } from "./dto/student.dto";
import { CourseDto } from "./dto/course.dto";
export declare class StudentService {
    private readonly studentRepository;
    private readonly courseRepository;
    private readonly studentCourseRepository;
    constructor(studentRepository: Repository<Student>, courseRepository: Repository<Course>, studentCourseRepository: Repository<StudentCourse>);
    createStudent(studentDto: StudentDto): Promise<Student>;
    createCourse(courseDto: CourseDto): Promise<Course>;
    createStudentCourse(studentId: number, courseId: number): Promise<void>;
}
