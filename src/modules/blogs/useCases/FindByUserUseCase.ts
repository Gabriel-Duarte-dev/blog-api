import { IBlogsRepository } from "../repositories/IBlogsRepository";

export class FindByUserUseCase {
  constructor(private iBlogsRepository: IBlogsRepository) {}

  async execute(userId: string) {
    const blogs = await this.iBlogsRepository.findByUser(userId);

    return blogs;
  }
}
