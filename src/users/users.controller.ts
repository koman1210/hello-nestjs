import { Controller, Post, Get, Patch, Delete, Body, Param, Query, BadRequestException } from '@nestjs/common';

import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from '../auth/dto/login.dto';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { username, password} = loginDto;
    console.log('loginDto: ', loginDto)
    try {
      const accessToken = await this.authService.login(username, password);
      console.log('33333333: ', accessToken)
      return { accessToken, msg: "Đăng nhập thành công!" };  
    } catch (error) {
      throw new BadRequestException('Invalid credentials');
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.deleteUserById(id);
  }

  @Delete()
  async deleteMany(@Body() ids: string[]) {
    return this.userService.deleteManyUsers(ids);
  }

  @Get()
  async getAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.userService.getAllUsers(Number(page), Number(limit));
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }
}