import { RegisterDto } from '#/src/auth/domain/dto/register.dto';

export abstract class RegisterService {
  abstract register(registerDto: RegisterDto): Promise<void>;
}
