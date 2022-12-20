import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserBody {
  id: string;
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  dateOfBirth: string;

  @IsNotEmpty()
  gender: string;

  cellPhone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
