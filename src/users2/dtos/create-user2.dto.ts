import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateUser2Dto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}

// export class LoginUser1Dto {

//     @IsEmail()
//     email: string;

//     @IsString()
//     password: string;
    
//}