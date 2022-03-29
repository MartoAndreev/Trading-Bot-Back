import { IsString, IsOptional, IsNumber, IsEmail } from "class-validator";

export class UpdateCurrencyDto {
    @IsEmail()
    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    currencyName: string;
}