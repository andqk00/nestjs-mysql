import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TaskGeneration1607315208285 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'tasks',
            columns: [
                {
                    name: 'id',
                    type: 'number',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'string',
                    length: '500',
                },
                {
                    name: 'description',
                    type: 'string',
                },
                {
                    name: 'isDone',
                    type: 'boolean',
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('tasks');
    }

}
