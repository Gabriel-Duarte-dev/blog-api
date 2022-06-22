import { CreateCommentDTO } from "../dtos/comments";

export interface ICommentRepository {
  create(data: CreateCommentDTO): Promise<CreateCommentDTO>;
  listByPost(blogId: string): Promise<CreateCommentDTO[]>;
}
