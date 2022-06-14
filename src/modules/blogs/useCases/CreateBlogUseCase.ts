import { CreateBlogDTO } from "../dtos/blogs";
import { IBlogsRepository } from "../repositories/IBlogsRepository";

export class CreateBlogUseCase {
  constructor(private iBlogsRepository: IBlogsRepository) {}

  async execute({ title, content, image, userId }: CreateBlogDTO) {
    const blog = await this.iBlogsRepository.create({
      title,
      content,
      image,
      userId,
    });

    return blog;
  }
}
