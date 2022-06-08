import { AuthUserDTO, CreateUserDTO, UserDTO } from "../dtos/user";

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<UserDTO>;
  findByEmailAndSite(data: UserDTO): Promise<AuthUserDTO | null>;
  findById(id: string): Promise<AuthUserDTO | null>;
  list(): Promise<AuthUserDTO[] | []>;
}
