import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class StudentDto {
  @ApiProperty({
    description: 'id',
    example: 'Student Id',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Student Name',
    example: 'Babar Javaid',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  studentName: string;

}
