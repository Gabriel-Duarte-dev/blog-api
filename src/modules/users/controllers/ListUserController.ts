import { Request, Response } from "express";
import { UsersRepository } from "../repositories/prisma/UsersRepository";
import { ListUserUseCase } from "../useCases/ListUserUseCase";

export class ListUserController {
  async handle(req: Request, res: Response) {
    const prismaUserRepository = new UsersRepository();
    const listUserUseCase = new ListUserUseCase(prismaUserRepository);

    const result = await listUserUseCase.execute();

    return res.status(200).json(result);
  }
}
