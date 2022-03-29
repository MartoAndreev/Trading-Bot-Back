import {IsEmail, IsNumber, IsString} from 'class-validator';

export class CreateCurrencyDto{
    @IsEmail()
    @IsString()
    email: string;
    
    @IsString()
    currencyName: string;

    

}