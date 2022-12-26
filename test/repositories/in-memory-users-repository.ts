import { UserInformation } from '@app/entities/users/user-information/user-information';
import { UsersRepository } from '@app/repositories/users-repository';
import { Users } from '@prisma/client';

export class InMemoryUsersRepository implements UsersRepository {
  public users: UserInformation[] = [];

  public user_response: Users = {
    id: 'e3c698fc-a755-4083-a8e8-30a8cc82680f',
    email: 'andrey@gmail.com',
    name: 'Andrey',
    lastName: 'Silveira',
    dateOfBirth: '19/07/1930',
    gender: 'Masculino',
    password: 'password',
    cellPhone: '51985809513s',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  get(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: null): Promise<Users | null> {
    return null;
  }

  getUserById(id: string): Promise<Users> {
    const user = this.user_response.id === id ? this.user_response : null;

    return user ? Promise.resolve(user) : Promise.resolve(null);
  }

  async create(user: UserInformation) {
    this.users.push(user);
  }
}
