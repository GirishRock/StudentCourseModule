import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from "@nestjs/typeorm";
import { join } from "path";
import { ConfigModule, ConfigService } from "@nestjs/config";

export const typeormConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService
  ): Promise<TypeOrmModuleOptions> => {
    return {
      type: "postgres",
      // host: process.env.DB_HOST,
      // port: +process.env.DB_PORT,
      // username: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_NAME,
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "gym74@shar",
      database: "test",
      entities: [join(__dirname, "..", "**", "*.entity.{ts,js}")],
      synchronize: false,
      logging: true,
      migrations: [join(__dirname, "..", "migrations", "*.{ts,js}")],
      cli: {
        migrationsDir: join(__dirname, "..", "migrations"),
      },
    };
  },
};

export const typeormConfig: TypeOrmModuleOptions = {
  type: "postgres",
  // host: process.env.DB_HOST,
  // port: +process.env.DB_PORT,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "gym74@shar",
  database: "test",
  entities: [join(__dirname, "..", "**", "*.entity.{ts,js}")],
  synchronize: false,
  logging: true,
  migrations: [join(__dirname, "..", "migrations", "*.{ts,js}")],
  cli: {
    migrationsDir: join(__dirname, "..", "migrations"),
  },
};
