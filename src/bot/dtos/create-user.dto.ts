import { IsNumber, IsString } from 'class-validator';

export class CreateTrdDto {
   
    @IsString()
    user: string;


    @IsString()
    currency: string;

    @IsNumber()
    price: number;

}