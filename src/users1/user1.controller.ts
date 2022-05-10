import { Controller, Post, Body, Get, Param, Patch, Delete, Query, NotFoundException, UseInterceptors, ClassSerializerInterceptor, Session } from "@nestjs/common";
import { idText } from "typescript";
import { CreateUser1Dto, LoginUser1Dto } from './dtos/create-user1.dto';
import { UsersService } from './users1.service';
import { UpdateUser1Dto } from "./dtos/update-user1.dto";
import { AuthService } from "./auth.service";
import { Serialize } from "src/interceptors/serialize.interceptor";
import { UserDto } from "./dtos/user.dto";


@Controller('user1')
@Serialize(UserDto)
export class Users1Controller {
  constructor(private usersService: UsersService, private authService: AuthService) { }

  @Get('/whoami')
  whoAmI(@Session() Session: any) {
    return this.usersService.findOne(Session.userId);
  }

  // @Post('/signout')
  // signOut(@Session() Session: any){
  //   Session.userId = null;
  // }

  @Post('/signup')
  async createUser(@Body() body: CreateUser1Dto, @Session() Session: any) {
    const user = await this.usersService.create(body.email, body.password)
    Session.userId = user.id;
    return user;
  }

  @Post('/login')
  async loginUser(@Body() body: LoginUser1Dto, @Session() Session: any) {
    console.log("casd");

    const user = await this.usersService.login(body.email, body.password);
    // Session.userId = user.id;
    return user;
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


}
