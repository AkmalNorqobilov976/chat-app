import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/auth/dtos/createUser.dto';
import { hashPassword } from 'src/utils/helpers';
import { User } from 'src/utils/typeorm';
import { Repository } from 'typeorm';
import { IUserService } from '../user';

@Injectable()
export class UsersService implements IUserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {

    }

    async createUser(user: CreateUserDto) {
        const findUser = await this.userRepository.findOneBy({
            email: user.email
        });

        if(findUser) {
            throw new HttpException('User Already Exists', HttpStatus.CONFLICT);
        }

        const password = await hashPassword(user.password);
        const newUser = this.userRepository.create({...user, password});
        return this.userRepository.save(newUser);
    }

    async findUser(findUserParams: Partial<{ id: number; email: string; }>) {
        
    }
}
