import { Controller, Post, Body, Get, Param, Patch, Delete, Query, NotFoundException, UseInterceptors, ClassSerializerInterceptor, Session } from "@nestjs/common";
import { idText } from "typescript";
import { CreateUser2Dto } from './dtos/create-user2.dto';
import { UsersService } from './users2.service';
import { UpdateUser2Dto } from "./dtos/update-user2.dto";
import { Serialize } from "src/interceptors/serialize.interceptor";
import { User } from "src/users/user.entity";
import { UserDto } from "./dtos/user.dto";



@Controller('user2')
@Serialize(UserDto)
export class Users2Controller {
  constructor(private usersService: UsersService) { }


  @Post('/signup')
  createUser(@Body() body: CreateUser2Dto) {
    this.usersService.create(body.email, body.password);

  }
  @Get('/:id')
  async findUser(@Param('id') id: string) {    
    const user = await this.usersService.findOne(parseInt(id));
    if (!user) { 
      throw new NotFoundException('user not found');  
    }
    return user;
  }

  @Get()
  findAllUser(@Query('email') email: string) {
    return this.usersService.find(email);
  }
  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUser2Dto) {
    return this.usersService.update(parseInt(id), body);
  }

}
