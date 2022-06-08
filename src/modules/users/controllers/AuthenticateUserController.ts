import { Request, Response } from "express";
import { CreateUserDTO } from "../dtos/user";
import { UsersRepository } from "../repositories/prisma/UsersRepository";
import { AuthenticateUserUseCase } from "../useCases/AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const data = req.body as CreateUserDTO;

    const prismaUserRepository = new UsersRepository();
    const authenticateUserUseCase = new AuthenticateUserUseCase(
      prismaUserRepository
    );

    const result = await authenticateUserUseCase.execute(data);

    return res.status(200).json(result);
  }
}
