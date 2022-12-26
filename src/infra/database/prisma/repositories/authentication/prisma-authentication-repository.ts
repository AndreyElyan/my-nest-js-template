import { Authentication } from '@app/entities/authentication/authentication';
import { jwtConstants } from '@app/entities/authentication/constants';

import { AuthenticationRepository } from '@app/repositories/authentication-repository';
import { WrongEmailPasswordError } from '@app/use-cases/errors/users/wrong-email-password';

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

  public id = '';

  async validate(userRequest: Authentication): Promise<any> {
    const { email, password } = userRequest;

    const _user = await this.prismaService.users.findUnique({
      where: {
        email,
      },
    });

    if (!_user) {
      throw new WrongEmailPasswordError();
    }
    if (_user.password === password.value) {
      this.id = _user.id;
      return this.login(_user.email);
    }
    throw new WrongEmailPasswordError();
  }

  async login(email: string) {
    const payload = { email, sub: this.id };
    return {
      id: this.id,
      expiresIn: '30d',
      access_token: `Bearer ${this.jwtService.sign(
        { payload },
        { secret: jwtConstants.secret, expiresIn: '30d' },
      )}`,
    };
  }
}
