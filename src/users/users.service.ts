import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "./user.entity";
import { stringify } from "querystring";
import { create } from "domain";
import { isEmail } from "class-validator";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) { }
  
  create(email: string, password: string, balance: number) {
    const user = this.repo.create({ email, password});
    return this.repo.save(user);
  }

  login(email: string, password: string) {
    const user = this.repo.find({ email, password });
    if (user) {
      return true;
    }
    return false;
  }

  // balance(balance: number) {
  //   const user = this.repo.find({ balance });
  //   console.log(user);
  //   if (user) {
  //     return true;
  //   }
  //   return false;
  // }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  find(email: string) {
    return this.repo.find({ email });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }

 
  // findBalace(balance: number) {
  //   return this.repo.findOne(balance);
  // }
  // async removeBalace(balance: number) {
  //   const user = await this.findBalace(balance);
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   return this.repo.remove(user);
  // }

  // async updateBalance(balace: number, attrs: Partial<User>) {
  //   const user = await this.findBalace(balace);
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   Object.assign(user, attrs);
  //   return this.repo.save(user);
  // }







  
  // create(email: string, password: string) {
  //     const user = this.repo.create({ email, password });
  //     console.log(email, password);

  //     return this.repo.save(user);
  // }



  // findOne(id: number) {
  //   return this.repo.findOne(id);
  // }

  // find(email: string) {
  //   return this.repo.find({ email });
  // }

  // async update(id: number, attrs: Partial<User>) {
  //   const user = await this.findOne(id);
  //   if (!user) {
  //     throw new Error('user not found');
  //   }
  //   Object.assign(user, attrs);
  //   return this.repo.save(user);
  // }

  // async remove(id: number) {
  //   const user = await this.findOne(id);
  //   if (!user) {
  //     throw new Error('user not found');
  //   }
  //   return this.repo.remove(user);
  // }
}