import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { Bot } from './bot.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Bot])],
    controllers: [BotController],
    providers: [BotService],
})

export class BotModule { }