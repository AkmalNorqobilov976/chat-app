import { Controller, Inject } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { Routes, Services } from 'src/utils/types';

@Controller(Routes.USERS)
export class UsersController {
  constructor( @Inject(Services.USERS) private readonly usersService: UsersService) {}


}
