import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHelloDto } from './dto/get-hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: GetHelloDto): string {
    return this.appService.getHello(query);
  }
}
