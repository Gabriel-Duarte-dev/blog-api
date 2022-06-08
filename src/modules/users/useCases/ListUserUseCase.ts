import { IUsersRepository } from "../repositories/IUsersRepository";

export class ListUserUseCase {
  constructor(private iUsersRepository: IUsersRepository) {}

  async execute() {
    const users = await this.iUsersRepository.list();

    return users;
  }
}
