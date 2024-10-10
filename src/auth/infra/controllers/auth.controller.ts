import { LoginDto } from '#/src/auth/domain/dto/login.dto';
import { RegisterDto } from '#/src/auth/domain/dto/register.dto';
import { LoginService } from '#/src/auth/domain/services/login.service';
import { RegisterService } from '#/src/auth/domain/services/register.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginService: LoginService,
    private readonly registerService: RegisterService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.registerService.register(registerDto);
  }
}
