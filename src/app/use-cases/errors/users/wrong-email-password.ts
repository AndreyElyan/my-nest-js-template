import { HttpException, HttpStatus } from '@nestjs/common';

export class WrongEmailPasswordError extends HttpException {
  constructor() {
    super('Email or Password is invalid', HttpStatus.UNAUTHORIZED);
  }
}
