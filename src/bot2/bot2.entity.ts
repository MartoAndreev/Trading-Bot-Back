
import { IsString } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from "typeorm";

@Entity()
export class Bot2 {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user: string;

    @Column()
    currency: string;

    @Column()
    price: number;
    
    @Column()
    action: string;


    @AfterInsert()
    logInsert() {
        console.log('Vuvedete User s ID', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Obnovete User s ID', this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Premahnete User s ID', this.id);
    }
}