import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map, Observable, observable } from "rxjs";
import { plainToClass } from "class-transformer";
import { nextTick } from "process";
import { UserDto } from "src/users1/dtos/user.dto";

interface ClassConstrictor{
    new(...argss: any[]): {};
}

export function Serialize(dto: ClassConstrictor) {
    return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
    constructor(private dto: any){}
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        return handler.handle().pipe(
            map((data: any) => {
                return plainToClass(UserDto, data, {
                    excludeExtraneousValues: true,
                });
                console.log('Im running befor response is sent out', data);

            })
        )
    }

}