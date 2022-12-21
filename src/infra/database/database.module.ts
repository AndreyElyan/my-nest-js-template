import { AuthenticationRepository } from '@app/repositories/authentication-repository';

import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from 'src/app/repositories/users-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAuthenticationRepository } from './prisma/repositories/authentication/prisma-authentication-repository';
import { PrismaUsersRepository } from './prisma/repositories/users/prisma-users-repository';

@Module({
  providers: [
    PrismaService,
    JwtService,
    { provide: UsersRepository, useClass: PrismaUsersRepository },
    {
      provide: AuthenticationRepository,
      useClass: PrismaAuthenticationRepository,
    },
  ],
  exports: [UsersRepository, AuthenticationRepository],
})
export class DatabaseModule {}
