import { AuthModule } from '#/src/auth/auth.module';
import { PrismaModule } from '#/src/common/prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, AuthModule],
  exports: [PrismaModule],
})
export class AppModule {}
