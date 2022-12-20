import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserBody } from './create-user';

import { PrismaService } from './prisma.service';

@Controller('users')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.users.findMany();
  }

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { name, lastName, password, dateOfBirth, gender, cellPhone, email } =
      body;

    await this.prisma.users.create({
      data: {
        name,
        lastName,
        password,
        dateOfBirth,
        gender,
        cellPhone,
        email,
      },
    });
  }
}
