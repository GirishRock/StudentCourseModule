"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const student_entity_1 = require("./entity/student.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_course_entity_1 = require("./entity/student-course.entity");
const course_entity_1 = require("./entity/course.entity");
let StudentService = class StudentService {
    constructor(studentRepository, courseRepository, studentCourseRepository) {
        this.studentRepository = studentRepository;
        this.courseRepository = courseRepository;
        this.studentCourseRepository = studentCourseRepository;
    }
    async createStudent(studentDto) {
        const data = await this.studentRepository.create(studentDto);
        return await this.studentRepository.save(data);
    }
    async createCourse(courseDto) {
        const courses = await this.courseRepository.create(courseDto);
        return await this.courseRepository.save(courses);
    }
    async createStudentCourse(studentId, courseId) {
        try {
            const student = await this.studentRepository.findOne({
                where: [{ id: studentId }]
            });
            const course = await this.courseRepository.findOne({
                where: [{ id: courseId }]
            });
            if (!student || !course) {
                throw new Error('Invalid student or course');
            }
            const studentCourse = new student_course_entity_1.StudentCourse();
            studentCourse.studentId = student.id;
            studentCourse.courseId = course.id;
            const data = await this.studentCourseRepository.save(studentCourse);
        }
        catch (error) {
            console.error('Error creating student course:', error);
            throw error;
        }
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(1, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __param(2, (0, typeorm_1.InjectRepository)(student_course_entity_1.StudentCourse)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map