import { Controller, Get, Post, Put, Delete, Body, Param, Patch } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') taskId: number) {
        return this.taskService.findOne(taskId);
    }

    @Post()
    create(@Body() task: Task) {
        return this.taskService.create(task);
    }

    @Patch(':id')
    update(
        @Param('id') taskId: number,
        @Body('name') taskName: string,
        @Body('description') taskDescrip: string,
        @Body('isDone') taskDone: boolean) {
            let task = new Task(taskId, taskName, taskDescrip, taskDone);
        return this.taskService.update(task);
    }

    @Delete(':id')
    delete(@Param('id') taskId: number) {
        return this.taskService.delete(taskId);
    }
}
