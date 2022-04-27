import { Controller, Post, Body, Get, Param, Patch, Delete, Query, NotFoundException, UseInterceptors, ClassSerializerInterceptor } from "@nestjs/common";
import { idText } from "typescript";
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from "./dtos/update-user.dto";


@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password, body.balance )
  }

  @Post('/login')
  loginUser(@Body() body: CreateUserDto) {
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
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }



  // @Get()
  // getBalance(@Query('balance') balance: number) {
  //   return this.usersService.findBalace(balance);
  // }

  // @Post('/balance')
  // postBalace(@Body() body: CreateUserDto) {
  //   this.usersService.balance(body.balance);
  // }

  // @Delete('/balace')
  // delBalance(@Param('balance') balance: number) {
  //   return this.usersService.removeBalace(balance);
  // }
  // @Patch('/balace')
  // updateBalance(@Param('balance') balance: number, @Body() body: UpdateUserDto) {
  //   return this.usersService.updateBalance(balance, body);
  // }

}
