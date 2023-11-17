import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { Services } from 'src/utils/constants';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [{
    provide: Services.AUTH,
    useClass: AuthService
  }]
})
export class AuthModule {}
