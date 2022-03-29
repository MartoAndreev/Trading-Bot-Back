
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from "typeorm";

@Entity()
export class Currency {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    currencyName: string;

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