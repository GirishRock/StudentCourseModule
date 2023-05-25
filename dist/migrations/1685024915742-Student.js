"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student1685024915742 = void 0;
class Student1685024915742 {
    constructor() {
        this.name = 'Student1685024915742';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "student_name" character varying(255) NOT NULL, CONSTRAINT "UQ_bddd61a40372e7612fb2109e070" UNIQUE ("student_name"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "course_name" character varying(255) NOT NULL, CONSTRAINT "UQ_2fa1c3ce7d334dec00dc507a058" UNIQUE ("course_name"), CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_course" ("id" SERIAL NOT NULL, "student_id" integer NOT NULL, "course_id" integer NOT NULL, CONSTRAINT "PK_5dfe61e3be7f2bb86e05e4ed0b2" PRIMARY KEY ("id", "student_id", "course_id"))`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "PK_5dfe61e3be7f2bb86e05e4ed0b2"`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "PK_ab3f4979286e908ef30bd8cb5ee" PRIMARY KEY ("student_id", "course_id")`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "PK_ab3f4979286e908ef30bd8cb5ee"`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "PK_5dfe61e3be7f2bb86e05e4ed0b2" PRIMARY KEY ("student_id", "course_id", "id")`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "PK_5dfe61e3be7f2bb86e05e4ed0b2"`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "PK_ab3f4979286e908ef30bd8cb5ee" PRIMARY KEY ("student_id", "course_id")`);
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
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "PK_ab3f4979286e908ef30bd8cb5ee"`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "PK_5dfe61e3be7f2bb86e05e4ed0b2" PRIMARY KEY ("student_id", "course_id", "id")`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "PK_5dfe61e3be7f2bb86e05e4ed0b2"`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "PK_ab3f4979286e908ef30bd8cb5ee" PRIMARY KEY ("student_id", "course_id")`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "PK_ab3f4979286e908ef30bd8cb5ee"`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "PK_5dfe61e3be7f2bb86e05e4ed0b2" PRIMARY KEY ("id", "student_id", "course_id")`);
        await queryRunner.query(`DROP TABLE "student_course"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "student"`);
    }
}
exports.Student1685024915742 = Student1685024915742;
//# sourceMappingURL=1685024915742-Student.js.map