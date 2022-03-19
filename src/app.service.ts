import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'sup!';
  }
  constructor() { }
  // constructor(@InjectRepository(User) private repo: Repository<User>) { }

}