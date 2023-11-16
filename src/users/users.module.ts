import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/utils/typeorm';
import { Services } from 'src/utils/types';
import { AuthService } from 'src/auth/services/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    {
      provide: Services.USERS,
      useClass: UsersService
    }
  ],
  exports: [
    {
      provide: Services.USERS,
      useClass: UsersService
    }
  ]
})
export class UsersModule {}
