import { IsEmail, IsString, IsOptional, IsNumber } from "class-validator";

export class UpdateUser2Dto {
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;

}