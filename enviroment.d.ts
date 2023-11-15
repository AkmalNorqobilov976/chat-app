declare namespace NodeJS {
    export interface ProcessEnv {
        DB_HOST?: string,
        DB_PASSWORD?: string;
        DB_PORT?: string;
        DB_URI?: string;
        DB_USER?: string;
        DB_DATABASE?: string;
        DB_URL?: string;
    }
}