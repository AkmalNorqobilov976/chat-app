import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, Inject } from '@nestjs/common';
import { Services } from 'src/utils/constants';
import { IAuthService } from '../auth';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject(Services.AUTH) private readonly authService: IAuthService) {
        super({ usernameField: 'email'});
    }

    async validate(email: string, password: string) {
        const result = this.authService.validateUser({ email, password});
    }
}