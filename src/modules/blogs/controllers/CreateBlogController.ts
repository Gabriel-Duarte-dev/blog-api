import { Request, Response } from "express";
import { CreateBlogDTO } from "../dtos/blogs";
import { BlogsRepository } from "../repositories/prisma/BlogsRepository";
import { CreateBlogUseCase } from "../useCases/CreateBlogUseCase";

export class CreateBlogController {
  async handle(req: Request, res: Response) {
    const data = req.body as CreateBlogDTO;
    data.userId = req.user.id;

    const prismaBlogRepository = new BlogsRepository();
    const createBlogUseCase = new CreateBlogUseCase(prismaBlogRepository);

    const result = await createBlogUseCase.execute(data);

    return res.status(201).json(result);
  }
}
