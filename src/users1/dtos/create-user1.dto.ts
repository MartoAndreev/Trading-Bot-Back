import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateUser1Dto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsNumber()
    balance: number;
}

export class LoginUser1Dto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;
    
}