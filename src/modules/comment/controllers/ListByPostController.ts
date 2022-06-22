import { Request, Response } from "express";
import { CommentRepository } from "../repositories/prisma/CommentRepository";
import { ListByPostUseCase } from "../useCases/ListByPostUseCase";

export class ListByPostController {
  async handle(req: Request, res: Response) {
    const blogId = req.params.blogId;

    const prismaCommentRepository = new CommentRepository();
    const listByPostUseCase = new ListByPostUseCase(prismaCommentRepository);

    const result = await listByPostUseCase.execute(blogId);

    return res.status(200).json(result);
  }
}
