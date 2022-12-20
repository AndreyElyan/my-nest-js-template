import { Injectable } from '@nestjs/common';
import { UserInformation } from 'src/app/entities/users/user-inormation/user-inormation';
import { UsersRepository } from '../../../../app/repositories/users-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: UserInformation): Promise<void> {
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

    await this.prismaService.users.create({
      data: {
        id,
        name,
        lastName,
        password: password.value,
        dateOfBirth,
        gender,
        cellPhone,
        email,
      },
    });
  }
}
