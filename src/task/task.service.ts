import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepo: Repository<Task>
    ) {}

    async findAll(): Promise<Task[]> {
        return await this.taskRepo.find();
    }

    async findOne(id: number): Promise<Task> {
        return await this.taskRepo.findOne(id);
    }

    async create(task: Task): Promise<Task> {
        return await this.taskRepo.save(task);
    }

    async update(task: Task): Promise<UpdateResult> {
        const updatedTask = await this.taskRepo.findOne(task.id);
        if(task.name) updatedTask.name = task.name;
        if(task.description) updatedTask.description = task.description;
        if(task.isDone) updatedTask.isDone = task.isDone;
        return await this.taskRepo.update(updatedTask.id, updatedTask);
    }

    async delete(id: number): Promise<DeleteResult> {
        const result = await this.taskRepo.delete(id);
        if(result.affected == 0) throw new NotFoundException('Could not find task.');
        return result;
    }
}
