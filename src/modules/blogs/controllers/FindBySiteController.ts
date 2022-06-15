import { Request, Response } from "express";
import { BlogsRepository } from "../repositories/prisma/BlogsRepository";
import { FindBySiteUseCase } from "../useCases/FindBySiteUseCase";

export class FindBySiteController {
  async handle(req: Request, res: Response) {
    const site = req.params.site;

    const prismaBlogRepository = new BlogsRepository();
    const findBySiteUseCase = new FindBySiteUseCase(prismaBlogRepository);

    const result = await findBySiteUseCase.execute(site);

    return res.status(201).json(result);
  }
}
