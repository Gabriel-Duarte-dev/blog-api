export interface CreateUserDTO {
  email: string;
  password: string;
  site: string;
}

export interface UserDTO {
  email: string;
  site: string;
}

export interface AuthUserDTO extends CreateUserDTO {
  id: string;
}
