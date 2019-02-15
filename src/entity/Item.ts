import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Item extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
