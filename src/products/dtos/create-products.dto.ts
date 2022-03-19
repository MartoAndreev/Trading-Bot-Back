import { IsEmail, IsString } from 'class-validator';
export class CreateProductDto {
  @IsEmail()
  id: string;

  @IsString()
  value: string;

}