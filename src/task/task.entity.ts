import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    description: string;

    @Column()
    isDone: boolean;

    constructor(id: number, name: string, descrip: string, done: boolean) {
        this.id = id;
        this.name = name;
        this.description = descrip;
        this.isDone = done;
    }
}
