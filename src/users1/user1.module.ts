import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users1Controller } from './user1.controller';
import { UsersService } from './users1.service';
import { User1 } from './user1.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User1])],
    controllers: [Users1Controller],
    providers: [UsersService],
})

export class Users1Module {

}