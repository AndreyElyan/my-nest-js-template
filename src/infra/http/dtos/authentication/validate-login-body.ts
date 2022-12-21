import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ValidateLoginBody {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
