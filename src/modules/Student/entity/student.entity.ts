import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { Course } from './course.entity';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({ 
    name: 'student_name', 
    length: 255,
    unique:true,
  })
  studentName: string;
  
  @ManyToMany(
  () => Course, 
  course => course.student)
  @JoinTable({
    name: 'student_course',
    joinColumn: {
      name: 'student_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
  })
  course: Course[];
}