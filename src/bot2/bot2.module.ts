import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bot2Controller } from './bot2.controller';
import { Bot2Service } from './bot2.service';
import { Bot2 } from './bot2.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Bot2])],
    controllers: [Bot2Controller],
    providers: [Bot2Service],
})

export class Bot2Module { }