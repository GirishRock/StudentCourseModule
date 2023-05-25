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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCourse = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./student.entity");
const course_entity_1 = require("./course.entity");
let StudentCourse = class StudentCourse {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentCourse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'student_id' }),
    __metadata("design:type", Number)
], StudentCourse.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'course_id' }),
    __metadata("design:type", Number)
], StudentCourse.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, student => student.course),
    (0, typeorm_1.JoinColumn)([{ name: 'student_id', referencedColumnName: 'id' }]),
    __metadata("design:type", Array)
], StudentCourse.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, course => course.student),
    (0, typeorm_1.JoinColumn)([{ name: 'course_id', referencedColumnName: 'id' }]),
    __metadata("design:type", Array)
], StudentCourse.prototype, "course", void 0);
StudentCourse = __decorate([
    (0, typeorm_1.Entity)('student_course')
], StudentCourse);
exports.StudentCourse = StudentCourse;
//# sourceMappingURL=student-course.entity.js.map