import { CreateUserDto } from "src/auth/dtos/createUser.dto";

export interface IUserService {
    createUser(user: CreateUserDto);
}