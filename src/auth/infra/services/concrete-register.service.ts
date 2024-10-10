import { RegisterDto } from '#/src/auth/domain/dto/register.dto';
import { UserRepository } from '#/src/auth/domain/repositories/user.repository';
import { RegisterService } from '#/src/auth/domain/services/register.service';
import { EncryptionService } from '#/src/common/encryption/domain/encryption.service';
import { BadRequestException } from '@nestjs/common';

export class ConcreteRegisterService extends RegisterService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptionService: EncryptionService,
  ) {
    super();
  }

  async register({ name, email, password }: RegisterDto): Promise<void> {
    const user = await this.userRepository.findByEmail(email);
    if (user) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await this.encryptionService.encrypt(password);
    await this.userRepository.save({
      name: name,
      email: email,
      password: hashedPassword,
    });
  }
}
