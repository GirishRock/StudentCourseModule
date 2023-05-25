import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

export class StudentCourseDto {
  @ApiProperty({
    description: 'id',
    example: 'Id',
  })
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Student Id',
    example: 'Student Id',
  })
  @IsOptional()
  @IsNumber()
  studentId: number;

  @ApiProperty({
    description: 'Course Id',
    example: 'Course Id',
  })
  @IsOptional()
  @IsNumber()
  courseId: number;

}
