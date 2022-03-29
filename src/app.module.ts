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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      // host: 'localhost',
      //   port: 3000,
      //   username: 'root',
      //   password: 'root',
      database: 'db.sqlite',
      entities: [ProductEntity, User, Bot, Currency],
      synchronize: true,
    }),
    UsersCurrencyModule,
    ProductModule,
    UsersModule,
    BotModule,


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
