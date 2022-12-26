import { Injectable } from '@nestjs/common';
import { UserInformation } from 'src/app/entities/users/user-information/user-information';

import { UsersRepository } from '@app/repositories/users-repository';
import { PrismaService } from '../../prisma.service';
import { PrismaUsersMapper } from '../../mappers/users/prisma-users-mapper';
import { Users } from '@prisma/client';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: UserInformation): Promise<void> {
    const raw = PrismaUsersMapper.toPrisma(user);

    await this.prismaService.users.create({
      data: raw,
    });
  }

  async getUserById(id: string): Promise<Users> | null {
    const user = await this.prismaService.users.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }

  async findByEmail(email: string): Promise<Users | null> {
    const user = await this.prismaService.users.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}
