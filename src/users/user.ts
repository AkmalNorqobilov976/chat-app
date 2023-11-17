import { CreateUserDto } from "src/auth/dtos/createUser.dto";
import { FindUserParams } from "src/auth/utils/types";

export interface IUserService {
    createUser(user: CreateUserDto);
    findUser(findUserParams: FindUserParams);
}