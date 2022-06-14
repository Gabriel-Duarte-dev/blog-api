import { CreateBlogDTO } from "../dtos/blogs";

export interface IBlogsRepository {
  create(data: CreateBlogDTO): Promise<CreateBlogDTO>;
  findByUser(userId: string): Promise<CreateBlogDTO[] | []>;
  list(): Promise<CreateBlogDTO[] | []>;
}
