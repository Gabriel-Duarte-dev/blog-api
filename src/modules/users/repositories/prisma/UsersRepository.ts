import { prisma } from "../../../../prisma";
import { AuthUserDTO, CreateUserDTO, UserDTO } from "../../dtos/user";
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

    const createdUser = {
      email: user.email,
      site: user.site,
    };

    return createdUser;
  }

  async findByEmailAndSite({
    email,
    site,
  }: UserDTO): Promise<AuthUserDTO | null> {
    const user = await prisma.users.findFirst({
      where: {
        email,
        site,
      },
    });

    return user;
  }

  async findById(id: string): Promise<AuthUserDTO | null> {
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  }

  async list(): Promise<AuthUserDTO[] | []> {
    const users = prisma.users.findMany();

    return users;
  }
}
