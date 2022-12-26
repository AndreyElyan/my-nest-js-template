import { jwtConstants } from '@app/entities/authentication/constants';
import { AuthenticationRepository } from '@app/repositories/authentication-repository';

import { JwtStrategy } from '@infra/auth/jwt.strategy';
import { LocalStrategy } from '@infra/auth/local.strategy';

import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersRepository } from 'src/app/repositories/users-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAuthenticationRepository } from './prisma/repositories/authentication/prisma-authentication-repository';
import { PrismaUsersRepository } from './prisma/repositories/users/prisma-users-repository';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [
    PrismaService,
    JwtStrategy,
    LocalStrategy,
    PrismaAuthenticationRepository,
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
