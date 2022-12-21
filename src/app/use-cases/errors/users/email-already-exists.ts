import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAlreadyExistsError extends HttpException {
  constructor() {
    super('Email Already Exists', HttpStatus.FORBIDDEN);
  }
}
