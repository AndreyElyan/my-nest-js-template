import { ValidateLogin } from '@app/use-cases/authentication/validate-login';
import { ValidateLoginBody } from '@infra/http/dtos/authentication/validate-login-body.entity';

import { Body, Controller, Post } from '@nestjs/common';

@Controller('authentication')
export class AuthenticationController {
  constructor(private validateLogin: ValidateLogin) {}

  @Post('login')
  async login(@Body() body: ValidateLoginBody) {
    const { email, password } = body;

    const user = await this.validateLogin.execute({ email, password });

    return user;
  }
}
