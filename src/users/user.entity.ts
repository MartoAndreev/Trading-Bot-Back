
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert(){
        console.log('Vuvedete User s ID',this.id);
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Obnovete User s ID',this.id);
    }

    @AfterRemove()
    logRemove(){
        console.log('Premahnete User s ID',this.id);
    }
}