import { UserInformationViewModel } from '@infra/http/view-models/users/user-view-model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from '@infra/auth/users/create-user';

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

    return { user: UserInformationViewModel.toResponse(user) };
  }

  @Get()
  async get() {
    return 'av';
  }
}
