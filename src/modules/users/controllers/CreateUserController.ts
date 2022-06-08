import { Request, Response } from "express";
import { CreateUserDTO } from "../dtos/user";
import { UsersRepository } from "../repositories/prisma/UsersRepository";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const data = req.body as CreateUserDTO;

    const prismaUserRepository = new UsersRepository();
    const createUserUseCase = new CreateUserUseCase(prismaUserRepository);

    const result = await createUserUseCase.execute(data);

    return res.status(201).json(result);
  }
}
