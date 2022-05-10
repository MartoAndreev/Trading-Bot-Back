import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users2Controller } from './user2.controller';
import { UsersService } from './users2.service';
import { User2 } from './user2.entity';


@Module({
    imports: [TypeOrmModule.forFeature([User2])],
    controllers: [Users2Controller],
    providers: [UsersService],
})

export class Users2Module {

}