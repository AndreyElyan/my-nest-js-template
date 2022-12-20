import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from 'src/app/use-cases/users/create-user';

import { CreateUserBody } from '../../dtos/create-user-body';

@Controller('users')
export class UsersController {
  constructor(private createUser: CreateUser) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { name, lastName, password, dateOfBirth, gender, cellPhone, email } =
      body;

    const { user } = await this.createUser.execute({
      name,
      lastName,
      password,
      dateOfBirth,
      gender,
      cellPhone,
      email,
    });

    return user;
  }
}
