import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { Student } from './student.entity';

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column({ name: 'course_name', length: 255, unique: true })
  courseName: string;
  
  @ManyToMany(
    () => Student,
    student => student.course,
  )
  student: Student[];
}