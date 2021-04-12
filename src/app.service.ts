import { Injectable } from '@nestjs/common';
import { GetHelloDto } from './dto/get-hello.dto';

@Injectable()
export class AppService {
  getHello(dto: GetHelloDto): string {
    return `Hello ${dto.name}!`;
  }
}
