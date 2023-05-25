import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Student1685024915742 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
