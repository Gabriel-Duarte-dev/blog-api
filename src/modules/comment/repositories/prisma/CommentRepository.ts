import { prisma } from "../../../../prisma";
import { CreateCommentDTO } from "../../dtos/comments";
import { ICommentRepository } from "../ICommentRepository";

export class CommentRepository implements ICommentRepository {
  async create({
    user,
    userImg,
    comment,
    blogId,
  }: CreateCommentDTO): Promise<CreateCommentDTO> {
    const createComment = await prisma.comments.create({
      data: {
        user,
        userImg,
        comment,
        blogId,
      },
    });

    return createComment;
  }

  async listByPost(blogId: string): Promise<CreateCommentDTO[]> {
    const listComment = await prisma.comments.findMany({
      where: {
        blogId: blogId,
      },
    });

    return listComment;
  }
}
