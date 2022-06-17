import { prisma } from "../../../../prisma";
import { CreateBlogDTO } from "../../dtos/blogs";
import { IBlogsRepository } from "../IBlogsRepository";

export class BlogsRepository implements IBlogsRepository {
  async create({
    title,
    content,
    image,
    userId,
  }: CreateBlogDTO): Promise<CreateBlogDTO> {
    const blog = await prisma.blogs.create({
      data: {
        title,
        content: {
          create: content,
        },
        image,
        userId,
      },
    });

    return blog;
  }

  async findBySite(site: string): Promise<CreateBlogDTO[] | []> {
    const blogs = await prisma.blogs.findMany({
      where: {
        author: {
          site: site,
        },
      },
      include: {
        content: true,
      },
    });

    return blogs;
  }

  async list(): Promise<CreateBlogDTO[] | []> {
    const blog = await prisma.blogs.findMany();

    return blog;
  }
}
