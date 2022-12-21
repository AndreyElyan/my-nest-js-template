import { Authentication } from '@app/entities/authentication/authentication';
import { ValidateLoginBody } from '@infra/http/dtos/authentication/validate-login-body';

export abstract class AuthenticationRepository {
  abstract validate(user: Authentication);
  abstract login(user: ValidateLoginBody);
}
