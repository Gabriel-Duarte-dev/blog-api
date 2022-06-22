import { CreateCommentDTO } from "../dtos/comments";
import { ICommentRepository } from "../repositories/ICommentRepository";

export class CreateCommentUseCase {
  constructor(private iCommentsRepository: ICommentRepository) {}

  async execute({ user, userImg, comment, blogId }: CreateCommentDTO) {
    const createComment = this.iCommentsRepository.create({
      user,
      userImg,
      comment,
      blogId,
    });

    return createComment;
  }
}
