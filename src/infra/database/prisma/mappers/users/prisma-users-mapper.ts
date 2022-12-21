import { UserInformation } from '@app/entities/users/user-information/user-information';

export class PrismaUsersMapper {
  static toPrisma(user: UserInformation) {
    const {
      name,
      lastName,
      password,
      dateOfBirth,
      gender,
      cellPhone,
      email,
      id,
    } = user;

    return {
      id,
      name,
      lastName,
      password: password.value,
      dateOfBirth,
      gender,
      cellPhone,
      email,
    };
  }
}
