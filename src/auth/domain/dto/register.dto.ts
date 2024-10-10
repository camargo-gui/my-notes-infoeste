import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class RegisterDto {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  password: string;
}
