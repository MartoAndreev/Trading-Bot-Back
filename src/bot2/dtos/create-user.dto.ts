import { IsNumber, IsString } from 'class-validator';

export class Create2TrdDto {
   
    @IsString()
    user: string;

    @IsString()
    currency: string;

    @IsNumber()
    price: number;

    @IsString()
    action: string;
}