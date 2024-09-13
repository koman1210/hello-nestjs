import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { UserSchema } from './user.schema';
import { UserService } from './user.service';
import { UserController } from './users.controller';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [UserService, AuthService, JwtService],
  controllers: [UserController, AuthController],
  exports: [UserService, AuthService],
})
export class UserModule {}