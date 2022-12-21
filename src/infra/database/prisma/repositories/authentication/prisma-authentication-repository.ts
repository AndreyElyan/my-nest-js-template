import { Authentication } from '@app/entities/authentication/authentication';

import { AuthenticationRepository } from '@app/repositories/authentication-repository';
import { WrongEmailPasswordError } from '@app/use-cases/errors/users/wrong-email-password';
import { ValidateLoginBody } from '@infra/http/dtos/authentication/validate-login-body';
import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '../../prisma.service';

@Injectable()
export class PrismaAuthenticationRepository
  implements AuthenticationRepository
{
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validate(user: Authentication): Promise<any> {
    const { email, password } = user;
    const _user = await this.prismaService.users.findUnique({
      where: {
        email,
      },
    });

    if (!_user) {
      throw new WrongEmailPasswordError();
    }
    if (_user.password === password.value) {
      return this.login(_user);
    }
    throw new WrongEmailPasswordError();
  }

  async login(user: ValidateLoginBody) {
    return {
      access_token: this.jwtService.sign(
        { email: user.email },
        {
          secret: 'topSecret512',
          expiresIn: '50s',
        },
      ),
    };
  }
}
