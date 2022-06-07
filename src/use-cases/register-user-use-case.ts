import bcrypt from "bcrypt";
import { UsersRepository } from "../repositories/users-repository";

interface RegisterUserUseCaseRequest {
  email: string;
  password: string;
  site: string;
}

export class RegisterUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: RegisterUserUseCaseRequest) {
    const { email, password, site } = request;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(password, salt);

    await this.usersRepository.register({
      email,
      password: hash,
      site,
    });
  }
}
