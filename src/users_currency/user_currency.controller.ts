import { Controller, Post, Body, Get, Param, Patch, Delete, Query, NotFoundException } from "@nestjs/common";
import { idText } from "typescript";
import { CreateCurrencyDto } from './dtos/create-user_currency.dto';
import { UsersService } from './user_currency.service';
import { UpdateCurrencyDto } from "./dtos/update-user_currency.dto";
import { Currency } from "./user_currency.entity";


@Controller('user_currency')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post('/create')
  createUser(@Body() body: CreateCurrencyDto) {
    this.usersService.create(body.email, body.currencyName)
  }

  // @Post('/login')
  // loginUser(@Body() body: CreateCurrencyDto) {
  //   this.usersService.login(body.userId, body.currencyName)
  // }

  // @Get('/:id')
  // async findUser(@Param('id') id: string) {
  //   const user = await this.usersService.findOne(parseInt(id));
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   return user;
  // }

  @Get('/currencyName/:currencyName')
  async find3(@Param('currencyName')  currencyName: string) {
    const users = await this.usersService.findUser((currencyName));
    if (!users) {
      throw new NotFoundException('currencyName not found');
    }
    return users;
  }

  @Get()
  findAllUsers(@Query('userId') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateCurrencyDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
