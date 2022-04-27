import { Controller, Post, Body, Get, Param, Patch, Delete, Query, NotFoundException } from "@nestjs/common";
import { idText } from "typescript";
import { Create2TrdDto } from './dtos/create-user.dto';
import { Bot2Service } from './bot2.service';
import { UpdateUserDto } from "./dtos/update-user.dto";


@Controller('bot2')
export class Bot2Controller {
  constructor(private botService: Bot2Service) { }

  @Post('/create')
  createTransaction(@Body() body: Create2TrdDto) {
    this.botService.create(body.user, body.currency, body.price, body.action)
    return 'ok'
  }

  @Delete('/:id')
  removeTrd(@Param('id') id: string) {
    return this.botService.remove(parseInt(id));
  
  }

  @Get('/id/:id')
  async find1(@Param('id') id: string) {
    const users = await this.botService.findId(parseInt(id));
    if (!users) {
      throw new NotFoundException('id not found');
    }
    return users;
  }

  @Get('/currency/:currency')
  async find2(@Param('currency') curr: string) {
    const users = await this.botService.findCurrency((curr));
    if (!users) {
      throw new NotFoundException('currency not found');
    }
    return users;
  }

  @Get('/user/:user')
  async find3(@Param('user') user: string) {
    const users = await this.botService.find((user));
    if (!users) {
      throw new NotFoundException('user not found');
    }
    return users;
  }









  // @Get('/')
  // async findtTransaction(@Query('id') id: string, @Query('currency') curr: string, @Query('user') userName: string) {
  //   console.log({id, curr, userName});

  //   const user = await this.botService.findOne(parseInt(id));
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   return user;
  // }

  // @Get('/:id')
  // async findtTransaction(@Query('id') id: string, @Query('currency') curr: string, @Query('user') userName: string) {
  //   console.log({id, curr, userName});

  //   const user = await this.botService.findOne(parseInt(id));
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   return user;
  // }

  // @Post('/signup')
  // createUser(@Body() body: CreateUserDto) {
  //   this.usersService.create(body.email, body.password)
  // }










  // @Get()
  // findAllUsers(@Query('email') email: string) {
  //   return this.botService.find(email);
  // }


  // @Patch('/:id')
  // updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
  //   return this.botService.update(parseInt(id), body);
  // }
}
