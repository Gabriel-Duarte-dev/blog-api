import { IBlogsRepository } from "../repositories/IBlogsRepository";

export class FindBySiteUseCase {
  constructor(private iBlogsRepository: IBlogsRepository) {}

  async execute(site: string) {
    const blogs = await this.iBlogsRepository.findBySite(site);

    return blogs;
  }
}
