import { prisma } from "../../../../prisma";
import { CreateUserDTO, UserDTO } from "../../dtos/user";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  async create({ email, password, site }: CreateUserDTO): Promise<UserDTO> {
    const user = await prisma.users.create({
      data: {
        email,
        password,
        site,
      },
    });

    const createUser = {
      email: user.email,
      site: user.site,
    };

    return createUser;
  }

  async findByEmailAndSite({ email, site }: UserDTO): Promise<UserDTO | null> {
    const user = await prisma.users.findFirst({
      where: {
        email,
        site,
      },
    });

    return user;
  }
}
