import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }
}
