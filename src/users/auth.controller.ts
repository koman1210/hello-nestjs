import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: UpdateUserDto) {
    const { username, password } = loginDto;
    const accessToken = await this.authService.login(username, password);
    return { accessToken };
  }
}