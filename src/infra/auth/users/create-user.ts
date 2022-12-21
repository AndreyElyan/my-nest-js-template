import { Injectable } from '@nestjs/common';
import { UserInformation } from '@app/entities/users/user-information/user-information';

import { UserPassword } from '@app/entities/users/user-information/user-password';
import { UsersRepository } from '@app/repositories/users-repository';
import { EmailAlreadyExistsError } from '../../../app/use-cases/errors/users/email-already-exists';

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

    const emailExists = await this.usersRepository.findByEmail(email);

    if (emailExists !== null) {
      throw new EmailAlreadyExistsError();
    }

    await this.usersRepository.create(user);

    return { user };
  }
}
