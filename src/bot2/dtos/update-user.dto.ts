import { IsEmail, IsString, IsOptional } from "class-validator";

export class UpdateUserDto {
    // @Column()
    @IsString()
    @IsOptional()
    user: string;

    // @Column()
    @IsString()
    @IsOptional()
    currency: string;

    // @Column()
    @IsOptional()
    price: number;

    @IsString()
    action: string;
    // @IsEmail()
    // @IsOptional()
    // email: string;

    // @IsString()
    // @IsOptional()
    // password: string;
}