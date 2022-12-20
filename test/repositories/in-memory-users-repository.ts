import { UserInformation } from '../../src/app/entities/users/user-inormation/user-inormation';
import { UsersRepository } from '../../src/app/repositories/users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  public users: UserInformation[] = [];
  async create(user: UserInformation) {
    this.users.push(user);
  }
}
