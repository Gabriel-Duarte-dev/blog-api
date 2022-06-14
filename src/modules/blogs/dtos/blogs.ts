import { CreateCommentDTO } from "./comments";

export interface CreateBlogDTO {
  title: string;
  content: string;
  image: string;
  userId: string;
}
