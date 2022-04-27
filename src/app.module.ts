import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './products/product.entity';
import { User } from './users/user.entity';
import { UsersModule } from './users/user.module';
import { Bot } from './bot/bot.entity';
import { BotModule } from './bot/bot.module';
import { UsersCurrencyModule } from './users_currency/user_currency.module';
import { Currency } from './users_currency/user_currency.entity';
import { User1 } from './users1/user1.entity';
import { Users1Module } from './users1/user1.module';
import { Bot2Service } from './bot2/bot2.service';
import { Bot2 } from './bot2/bot2.entity';
import { Bot2Module } from './bot2/bot2.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      // host: 'localhost',
      //   port: 3000,
      //   username: 'root',
      //   password: 'root',
      database: 'db.sqlite',
      entities: [ProductEntity, User, Bot, Currency, User1, Bot2],
      synchronize: true,
    }),
    UsersCurrencyModule,
    ProductModule,
    UsersModule,
    BotModule,
    Users1Module,
    Bot2Module

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
