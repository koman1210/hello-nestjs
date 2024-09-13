import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username }).exec();
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
  //   const jwt = await this.jwtService.signAsync({ user });
  //   return { token: jwt }
  // }

  //   async verifyJwt(jwt: string): Promise<{exp: number}>{

  //   }
    const payload = { username: user.username };
    console.log("errrrrrrrrr: ", this.jwtService)
    const data = this.jwtService.sign(payload, {
      secret: "secret",
      expiresIn: '60s'
    });

    console.log('data: ', data)
  }
}