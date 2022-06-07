export interface CreateUserDTO {
  email: string;
  password: string;
  site: string;
}

export interface UniqueUser {
  email: string;
  site: string;
}

export interface UsersRepository {
  register: (data: CreateUserDTO) => Promise<void>;
  findByEmail: (data: UniqueUser) => Promise<CreateUserDTO>;
}
