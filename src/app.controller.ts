import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHelloDto } from './dto/get-hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query(new ValidationPipe()) query: GetHelloDto): string {
    return this.appService.getHello(query);
  }
}
