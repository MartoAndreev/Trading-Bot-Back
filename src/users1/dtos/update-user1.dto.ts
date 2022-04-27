import { IsEmail, IsString, IsOptional, IsNumber } from "class-validator";

export class UpdateUser1Dto {
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;

    @IsNumber()
    @IsOptional()
    balance: number;
}