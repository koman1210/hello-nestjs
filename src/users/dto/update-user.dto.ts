import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  fullname?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  role?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phonenumber?: string;

  @IsString()
  @IsOptional() // Address có thể là tùy chọn
  address?: string;
}