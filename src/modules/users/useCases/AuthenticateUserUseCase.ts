import bcrypt from "bcrypt";
import authConfig from "../../../config/auth";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../errors/AppError";
import { CreateUserDTO } from "../dtos/user";
import { IUsersRepository } from "../repositories/IUsersRepository";

export class AuthenticateUserUseCase {
  constructor(private iUsersRepository: IUsersRepository) {}

  async execute({ email, password, site }: CreateUserDTO) {
    const user = await this.iUsersRepository.findByEmailAndSite({
      email,
      site,
    });

    if (!user) throw new AppError("Email or password incorrect!");

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) throw new AppError("Email or password incorrect!");

    const token =
      authConfig.jwt.secret &&
      sign({}, authConfig.jwt.secret, {
        subject: user.id,
        expiresIn: authConfig.jwt.expiresIn,
      });

    const tokenReturn = {
      user: {
        email: user.email,
        site: user.site,
      },
      token,
    };

    return tokenReturn;
  }
}
