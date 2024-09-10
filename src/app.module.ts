import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Logger } from '@nestjs/common';

import { UserModule } from './users/users.module'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './users/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (ConfigService: ConfigService) => {
        const uri = ConfigService.get<string>('MONGODB_URI');
        return { uri };
      }
    }),
    UserModule,
    AuthModule
  ]
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  async onModuleInit() {
    const mongoose = (await import('mongoose')).default;
    mongoose.connection.once('open', () => {
      console.log('connect to mongodb')
      this.logger.log("Đã kết nối thành công với MongoDB");
    });
    mongoose.connection.on('error', (err) => {
      this.logger.error('Lỗi kết nối MongoDB', err)
    })
  }
}
// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule { }
