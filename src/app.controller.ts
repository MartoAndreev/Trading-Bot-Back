import { Controller } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  getHello(): string {
    return this.appService.getHello();
  }
  // createUser(@Body() body: User) {
  //   this.appService.create(body.email, body.password);
  // }
  // @Get('/:id')
  // findUser(@Param('id') id: string) {
  //   return this.appService.findOne(parseInt(id));
  // }

  // @Get()
  // findAllUsers(@Query('email')email: string) {
  //   return this.appService.find(email);
  // }

}
