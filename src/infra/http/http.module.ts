import { ValidateLogin } from '@app/use-cases/authentication/validate-login';
import { Module } from '@nestjs/common';

import { CreateUser } from '@infra/auth/users/create-user';
import { DatabaseModule } from '../database/database.module';
import { AuthenticationController } from './controllers/authentication/authentication.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController, AuthenticationController],
  providers: [CreateUser, ValidateLogin],
})
export class HttpModule {}
