import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationRepository } from '@app/repositories/authentication-repository';
import { Authentication } from '@app/entities/authentication/authentication';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationRepository: AuthenticationRepository) {
    super();
  }

  async validate(user: Authentication): Promise<any> {
    const _user = await this.authenticationRepository.validate(user);
    if (!_user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
