import { IsNotEmpty } from 'class-validator';

export class CreateDishtypeDto {
  @IsNotEmpty()
  name: string;
}
