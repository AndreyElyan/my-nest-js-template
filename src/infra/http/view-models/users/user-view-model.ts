import { UserInformation } from '@app/entities/users/user-information/user-information';
import { Users } from '@prisma/client';

export class UserInformationViewModel {
  static toResponse(user: UserInformation) {
    return {
      id: user.id,
      email: user.email,
      name: `${user.name} ${user.lastName}`,
    };
  }
}

export class UserDataViewModel {
  static toResponse(user: Users) {
    return {
      id: user.id,
      email: user.email,
      name: `${user.name} ${user.lastName}`,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      cellPhone: user.cellPhone,
    };
  }
}
