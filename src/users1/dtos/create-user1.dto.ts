import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateUser1Dto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}

export class LoginUser1Dto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;
    
}