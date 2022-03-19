import { Controller, Post, Body, Get, Param, Patch, Delete, Query } from "@nestjs/common";
import { idText } from "typescript";
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);

    this.usersService.create(body.email, body.password)
  }
  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id')id: string){
    return this.usersService.remove(parseInt(id));
  }
}