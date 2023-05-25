import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { Student } from './student.entity';
import { Course } from './course.entity';

@Entity('student_course')
// @Unique('student_course_unique_constraint', ['student', 'course'])
  export class StudentCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({ name: 'student_id' })
  studentId: number;

  @PrimaryColumn({ name: 'course_id' })
  courseId: number;

  @ManyToOne(
    () => Student,
    student => student.course)
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  student: Student[];

  @ManyToOne(
    () => Course,
    course => course.student)
  @JoinColumn([{ name: 'course_id', referencedColumnName: 'id' }])
  course: Course[];
}