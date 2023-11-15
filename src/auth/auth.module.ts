import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { Services } from 'src/utils/types';

@Module({
  controllers: [AuthController],
  providers: [{
    provide: Services.AUTH,
    useClass: AuthModule
  }]
})
export class AuthModule {}
