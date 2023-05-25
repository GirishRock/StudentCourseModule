import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CourseDto {
  @ApiProperty({
    description: 'id',
    example: 'Course Id',
  })
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Course Name',
    example: 'NestJS',
  })
  @IsOptional()
  @IsString()
  courseName: string;

}
