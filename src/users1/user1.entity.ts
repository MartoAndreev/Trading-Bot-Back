
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from "typeorm";
import { Exclude } from "class-transformer";
@Entity()
export class User1 {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

  

    // @Column()
    // additional: string;

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