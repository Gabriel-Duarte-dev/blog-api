import { Request, Response } from "express";
import { CreateCommentDTO } from "../dtos/comments";
import { CommentRepository } from "../repositories/prisma/CommentRepository";
import { CreateCommentUseCase } from "../useCases/CreateCommentUseCase";

export class CreateCommentController {
  async handle(req: Request, res: Response) {
    const data = req.body as CreateCommentDTO;

    const prismaCommentRepository = new CommentRepository();
    const createCommentUseCase = new CreateCommentUseCase(
      prismaCommentRepository
    );

    const result = await createCommentUseCase.execute(data);

    return res.status(201).json(result);
  }
}
