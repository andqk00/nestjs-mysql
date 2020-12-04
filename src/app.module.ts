import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sandbox.cluster-cd4rrmvmhmqt.ap-southeast-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: '1qaZ2wsX',
      database: 'operator_api',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [
        'src/migrations/*.ts',
        'dist/migrations/*{.ts,.js}'
      ],
      cli: {
        'migrationsDir': 'src/migrarions'
      },
      synchronize: true,
      acquireTimeout: 100000,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
