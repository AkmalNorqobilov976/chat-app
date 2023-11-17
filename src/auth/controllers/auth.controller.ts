import { Body, Controller, Get, Inject, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from '../auth';
import { CreateUserDto } from '../dtos/createUser.dto';
import { IUserService } from 'src/users/user';
import { LocalAuthGuard } from '../utils/Guards';

@Controller(Routes.AUTH)
export class AuthController {
    constructor(
        @Inject(Services.AUTH) private authService: IAuthService,
        @Inject(Services.USERS) private userService: IUserService ) {

    } 

    @Post('register')
    @UsePipes(ValidationPipe)
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
        
    }

    @Post('login')
    @UseGuards(LocalAuthGuard)
    login() {

    }

    @Get('status') 
    status() {

    }

    @Get('logout') 
    logout() {

    }

}
