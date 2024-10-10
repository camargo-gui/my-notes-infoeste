import { User } from '#/src/auth/domain/entities/user.entity';

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User>;
  abstract save(user: User): Promise<void>;
}
