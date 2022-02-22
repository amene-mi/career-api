import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {randomInt} from "crypto";

@Entity()
export class Job{
    @PrimaryGeneratedColumn()
        id: string;

        @Column()
        title: string;

        @Column()
        location: string;

        @Column()
        type: string;

        @Column()
        description: string;
}