import { prisma } from "../../prisma";
import {
  CreateUserDTO,
  UniqueUser,
  UsersRepository,
} from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
  async register({ email, password, site }: CreateUserDTO) {
    await prisma.users.create({
      data: {
        email,
        password,
        site,
      },
    });
  }

  async findByEmail({ email, site }: UniqueUser) {
    await prisma.users.findFirst({
      where: {
        email: email,
        site: site,
      },
    });
  }
}
