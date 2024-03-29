import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { IAuthService } from '../auth';
import { ValidateUserDetails } from 'src/utils/types';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/users/user';
import { compareHash } from 'src/utils/helpers';

@Injectable()
export class AuthService implements IAuthService {
    
    constructor(@Inject(Services.USERS) private readonly userService: IUserService) {}
    
    async validateUser(userDetails: ValidateUserDetails) {
        const user = await this.userService.findUser({ email: userDetails.email })
        if(!user) throw new HttpException('Invalid Credintials', HttpStatus.UNAUTHORIZED);

        return await compareHash(userDetails.password, user.password);
    }
}
