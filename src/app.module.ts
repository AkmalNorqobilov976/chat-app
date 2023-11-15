import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './utils/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env.development'}), 
    AuthModule, 
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      entities,
      url: process.env.DB_URL,
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
