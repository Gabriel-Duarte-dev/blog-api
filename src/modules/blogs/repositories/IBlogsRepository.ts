import { CreateBlogDTO } from "../dtos/blogs";

export interface IBlogsRepository {
  create(data: CreateBlogDTO): Promise<CreateBlogDTO>;
  findBySite(site: string): Promise<CreateBlogDTO[] | []>;
  list(): Promise<CreateBlogDTO[] | []>;
}
