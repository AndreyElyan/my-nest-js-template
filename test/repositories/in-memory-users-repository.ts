import { UserInformation } from '@app/entities/users/user-information/user-information';
import { UsersRepository } from '@app/repositories/users-repository';
import { Users } from '@prisma/client';

export class InMemoryUsersRepository implements UsersRepository {
  public users: UserInformation[] = [];

  get(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: null): Promise<Users | null> {
    return null;
  }

  async create(user: UserInformation) {
    this.users.push(user);
  }
}
