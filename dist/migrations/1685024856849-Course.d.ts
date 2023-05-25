import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Course1685024856849 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
