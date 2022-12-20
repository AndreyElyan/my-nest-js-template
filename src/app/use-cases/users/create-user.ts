import { Injectable } from '@nestjs/common';
import { UserInformation } from 'src/app/entities/users/user-information/user-information';

import { UserPassword } from 'src/app/entities/users/user-information/user-password';
import { UsersRepository } from 'src/app/repositories/users-repository';

interface CreateUserRequest {
  name: string;
  lastName: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  cellPhone: string;
  email: string;
}

interface CreateUserResponse {
  user: UserInformation;
}
@Injectable()
export class CreateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { cellPhone, dateOfBirth, email, gender, lastName, name, password } =
      request;
    const user = new UserInformation({
      cellPhone,
      dateOfBirth,
      email,
      gender,
      lastName,
      name,
      password: new UserPassword(password),
    });

    await this.usersRepository.create(user);

    return { user };
  }
}
