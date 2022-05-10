
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from "typeorm";
 
@Entity()
export class User2 {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;


    @AfterInsert()
    logInsert() {
        console.log('Vuveden e User s ID', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Obnoven e User s ID', this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Premahnat e User s ID', this.id);
    }
}