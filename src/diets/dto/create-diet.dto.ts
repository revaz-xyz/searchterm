import { IsNotEmpty } from 'class-validator';
export class CreateDietDto {
  @IsNotEmpty()
  name: string;
}
