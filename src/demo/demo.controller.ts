import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('demo')
export class DemoController {
    // @Get("./")
    // findAll(): string {
    //     return 'This is a demo'
    // }
    @Get("/demo")
    findAll(@Req() request: Request): string {
        return "Ngu si dan don"
    }
}
