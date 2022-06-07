import { CreateUserDTO, UserDTO } from "../dtos/user";

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<UserDTO>;
  findByEmailAndSite(data: UserDTO): Promise<UserDTO | null>;
}
