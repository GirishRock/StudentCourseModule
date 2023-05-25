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
exports.Course = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./student.entity");
let Course = class Course {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id', unsigned: true }),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'course_name', length: 255, unique: true }),
    __metadata("design:type", String)
], Course.prototype, "courseName", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => student_entity_1.Student, student => student.course),
    __metadata("design:type", Array)
], Course.prototype, "student", void 0);
Course = __decorate([
    (0, typeorm_1.Entity)('course')
], Course);
exports.Course = Course;
//# sourceMappingURL=course.entity.js.map