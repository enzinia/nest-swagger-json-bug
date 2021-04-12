import { MaxLength, MinLength } from 'class-validator';

export class GetHelloDto {
  @MinLength(1)
  @MaxLength(6)
  name: string;
}
