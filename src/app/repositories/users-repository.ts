import { UserInformation } from '../entities/users/user-inormation/user-inormation';

export abstract class UsersRepository {
  abstract create(user: UserInformation): Promise<void>;
}
