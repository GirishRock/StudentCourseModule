import { Student } from './student.entity';
import { Course } from './course.entity';
export declare class StudentCourse {
    id: number;
    studentId: number;
    courseId: number;
    student: Student[];
    course: Course[];
}
