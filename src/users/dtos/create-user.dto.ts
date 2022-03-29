import { IsEmail, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateUserDto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;




}