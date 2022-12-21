import { Authentication } from '@app/entities/authentication/authentication';

import { UserPassword } from '@app/entities/users/user-information/user-password';

import { AuthenticationRepository } from '@app/repositories/authentication-repository';
import { ValidateLoginBody } from '@infra/http/dtos/authentication/validate-login-body';

export class InMemoryAuthenticationRepository
  implements AuthenticationRepository
{
  public userValid = {
    email: 'Ronaldo',
    password: new UserPassword('10204060'),
  };

  validate(user: Authentication) {
    if (user.email && user.password === this.userValid.password) {
      return user;
    }
    return null;
  }

  login(user: ValidateLoginBody) {
    return user;
  }
}
