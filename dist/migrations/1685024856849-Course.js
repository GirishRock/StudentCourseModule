"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course1685024856849 = void 0;
class Course1685024856849 {
    constructor() {
        this.name = 'Course1685024856849';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "student_name" character varying(255) NOT NULL, CONSTRAINT "UQ_bddd61a40372e7612fb2109e070" UNIQUE ("student_name"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "course_name" character varying(255) NOT NULL, CONSTRAINT "UQ_2fa1c3ce7d334dec00dc507a058" UNIQUE ("course_name"), CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_course" ("student_id" integer NOT NULL, "course_id" integer NOT NULL, CONSTRAINT "PK_ab3f4979286e908ef30bd8cb5ee" PRIMARY KEY ("student_id", "course_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_decddeaaed256b357c8d296426" ON "student_course" ("student_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_0ee43ae3da1f7093cb1d4645b1" ON "student_course" ("course_id") `);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "FK_decddeaaed256b357c8d2964260" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "FK_0ee43ae3da1f7093cb1d4645b18" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "FK_0ee43ae3da1f7093cb1d4645b18"`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "FK_decddeaaed256b357c8d2964260"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0ee43ae3da1f7093cb1d4645b1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_decddeaaed256b357c8d296426"`);
        await queryRunner.query(`DROP TABLE "student_course"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "student"`);
    }
}
exports.Course1685024856849 = Course1685024856849;
//# sourceMappingURL=1685024856849-Course.js.map