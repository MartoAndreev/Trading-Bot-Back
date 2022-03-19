import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Value: number;

    @Column()
    Change: number;

    @Column()
    BotProfit: number;

    @Column()
    AvgDaily: number;

    @Column()
    Transactions: number;

    @Column()
    Status: string;
}