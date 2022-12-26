import { ValidateLogin } from '@app/use-cases/authentication/validate-login';
import { Module } from '@nestjs/common';

import { CreateUser } from '@infra/auth/users/create-user';
import { DatabaseModule } from '../database/database.module';
import { AuthenticationController } from './controllers/authentication/authentication.controller';
import { UsersController } from './controllers/users/users.controller';
import { PrismaAuthenticationRepository } from '@infra/database/prisma/repositories/authentication/prisma-authentication-repository';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { GetUserById } from '@infra/auth/users/get-user-by-id';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController, AuthenticationController],
  providers: [
    CreateUser,
    GetUserById,
    ValidateLogin,
    PrismaAuthenticationRepository,
    PrismaService,
    JwtService,
  ],
})
export class HttpModule {}
