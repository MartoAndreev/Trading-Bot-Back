
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    // @Column()
    // income: number;

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