import { Users } from '@prisma/client';
import { UserInformation } from '../entities/users/user-information/user-information';

export abstract class UsersRepository {
  abstract create(user: UserInformation): Promise<void>;

  abstract get(): Promise<void>;

  abstract findByEmail(email: string): Promise<Users | null>;
}
