import { Body, Controller,HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginDto: UpdateUserDto): Promise<{token: string } | any> {
    const { username, password } = loginDto;
    return  this.authService.login(username, password);
  }
}