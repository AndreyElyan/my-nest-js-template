import {
  UserDataViewModel,
  UserInformationViewModel,
} from '@infra/http/view-models/users/user-view-model';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUser } from '@infra/auth/users/create-user';

import { CreateUserBody } from '../../dtos/create-user-body';
import { JwtAuthGuard } from '@infra/auth/jwt-auth.guard';
import { GetUserById } from '@infra/auth/users/get-user-by-id';

@Controller('users')
export class UsersController {
  constructor(
    private createUser: CreateUser,
    private getUserById: GetUserById,
  ) {}

  @Post('/create')
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

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async get(@Param('id') id: string) {
    const user = await this.getUserById.execute(id);

    return { user: UserDataViewModel.toResponse(user) };
  }
}
