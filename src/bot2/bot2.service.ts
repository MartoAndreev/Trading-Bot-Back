import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Bot2 } from "./bot2.entity";
import { stringify } from "querystring";
import { create } from "domain";
import { isEmail } from "class-validator";

@Injectable()
export class Bot2Service {
  constructor(@InjectRepository(Bot2) private repo: Repository<Bot2>) { }
  
  create(user: string, currency: string, price: number,  action: string) {
    
    const trd = this.repo.create({ user, currency, price, action });
    return this.repo.save(trd);
    
  }

  // login(user: string, currency: string, price: number) {
  //   const trd = this.repo.find({ user, currency, price });
  //   console.log(trd);
  //   if (trd) {
  //     return true;
  //   }
  //   return false;
  // }

  findId(id: number) {
    return this.repo.findOne(id);
  }

  findCurrency(currency: string) {
    return this.repo.findOne({currency});
    
    
  } 

  findUser(user: string) {

    
    return this.repo.find({user});
  }



  find(user: string) {
    return this.repo.find({ user });
  }

  async update(id: number, attrs: Partial<Bot2>) {
    const user = await this.findId(id);
    if (!user) {
      throw new NotFoundException('bot not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findId(id);
    if (!user) {
      throw new NotFoundException('bot not found');
    }
    return this.repo.remove(user);
  }


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