import { Controller, Post, Body, Get, Param, Patch, Delete, Query, NotFoundException, UseInterceptors, ClassSerializerInterceptor } from "@nestjs/common";
import { idText } from "typescript";
import { CreateUser1Dto, LoginUser1Dto } from './dtos/create-user1.dto';
import { UsersService } from './users1.service';
import { UpdateUser1Dto } from "./dtos/update-user1.dto";


@Controller('user1')
export class Users1Controller {
  constructor(private usersService: UsersService) { }

  @Post('/signup')
  async createUser(@Body() body: CreateUser1Dto) {
    this.usersService.create(body.email, body.password, body.balance )
  }

  @Post('/login')
  async loginUser(@Body() body: LoginUser1Dto) {
    this.usersService.login(body.email, body.password);
  }
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUser1Dto) {
    return this.usersService.update(parseInt(id), body);
  }

  // @Get()
  // getBalance(@Query('balance') balance: number) {
  //   return this.usersService.findBalace(balance);
  // }

  @Post('/balance')
  postBalace(@Body() body: CreateUser1Dto) {
    this.usersService.balance(body.balance);
  }

  @Delete('/balance')
  delBalance(@Param('balance') balance: number) {
    return this.usersService.removeBalace(balance);
  }
  @Patch('/balance')
  updateBalance(@Param('balance') balance: number, @Body() body: UpdateUser1Dto) {
    return this.usersService.updateBalance(balance, body);
  }

}
