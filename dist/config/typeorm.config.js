"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfig = exports.typeormConfigAsync = void 0;
const path_1 = require("path");
const config_1 = require("@nestjs/config");
exports.typeormConfigAsync = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async (configService) => {
        return {
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "gym74@shar",
            database: "test",
            entities: [(0, path_1.join)(__dirname, "..", "**", "*.entity.{ts,js}")],
            synchronize: false,
            logging: true,
            migrations: [(0, path_1.join)(__dirname, "..", "migrations", "*.{ts,js}")],
            cli: {
                migrationsDir: (0, path_1.join)(__dirname, "..", "migrations"),
            },
        };
    },
};
exports.typeormConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "gym74@shar",
    database: "test",
    entities: [(0, path_1.join)(__dirname, "..", "**", "*.entity.{ts,js}")],
    synchronize: false,
    logging: true,
    migrations: [(0, path_1.join)(__dirname, "..", "migrations", "*.{ts,js}")],
    cli: {
        migrationsDir: (0, path_1.join)(__dirname, "..", "migrations"),
    },
};
//# sourceMappingURL=typeorm.config.js.map