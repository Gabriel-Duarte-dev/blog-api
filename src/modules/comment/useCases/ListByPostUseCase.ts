import { ICommentRepository } from "../repositories/ICommentRepository";

export class ListByPostUseCase {
  constructor(private iCommentRepository: ICommentRepository) {}

  async execute(blogId: string) {
    const listComments = this.iCommentRepository.listByPost(blogId);

    return listComments;
  }
}
