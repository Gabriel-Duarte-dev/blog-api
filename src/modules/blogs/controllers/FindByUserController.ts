import { Request, Response } from "express";
import { BlogsRepository } from "../repositories/prisma/BlogsRepository";
import { FindByUserUseCase } from "../useCases/FindByUserUseCase";

export class FindByUserController {
  async handle(req: Request, res: Response) {
    const userId = req.user.id;

    const prismaBlogRepository = new BlogsRepository();
    const findByUserUseCase = new FindByUserUseCase(prismaBlogRepository);

    const result = await findByUserUseCase.execute(userId);

    return res.status(201).json(result);
  }
}
