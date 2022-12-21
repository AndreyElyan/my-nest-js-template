import { ValidateLogin } from '@app/use-cases/authentication/validate-login';
import { ValidateLoginBody } from '@infra/http/dtos/authentication/validate-login-body';

import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('authenticate')
export class AuthenticationController {
  constructor(private validateLogin: ValidateLogin) {}

  @Post('/login')
  async login(@Body() payload: ValidateLoginBody) {
    const user = await this.validateLogin.execute(payload);

    return user;
  }

  @Get()
  async get() {
    return 'av';
  }
}
