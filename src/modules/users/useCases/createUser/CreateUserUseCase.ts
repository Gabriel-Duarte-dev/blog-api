import bcrypt from "bcrypt";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma";
import { CreateUserDTO } from "../../dtos/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {
  constructor(private iUsersRespository: IUsersRepository) {}

  async execute({ email, password, site }: CreateUserDTO) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const userAlreadyExist = await this.iUsersRespository.findByEmailAndSite({
      email,
      site,
    });

    if (userAlreadyExist) {
      throw new AppError("User already exists!");
    }

    const user = await this.iUsersRespository.create({
      email,
      password: hash,
      site,
    });

    const returnUser = {
      email: user.email,
      site: user.site,
    };

    return returnUser;
  }
}
