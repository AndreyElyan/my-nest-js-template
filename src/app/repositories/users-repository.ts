import { UserInformation } from '../entities/users/user-information/user-information';

export abstract class UsersRepository {
  abstract create(user: UserInformation): Promise<void>;
}
