import { Body, Controller, Get, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Routes, Services } from 'src/utils/types';
import { IAuthService } from '../auth';
import { CreateUserDto } from '../dtos/createUser.dto';

@Controller(Routes.AUTH)
export class AuthController {
    constructor(@Inject(Services.AUTH) private authService: IAuthService ) {

    } 

    @Post('register')
    @UsePipes(ValidationPipe)
    register(@Body() createUserDto: CreateUserDto) {
        console.log('salom sizlarga')
    }

    @Post('login')
    login() {

    }

    @Get('status') 
    status() {

    }

    @Get('logout') 
    logout() {

    }

}
