import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from './user_currency.controller';
import { UsersService } from './user_currency.service';
import { Currency } from './user_currency.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Currency])],
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersCurrencyModule { }