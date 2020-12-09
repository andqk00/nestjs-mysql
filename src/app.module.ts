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
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '@Linhhuyenvu1906',
      database: 'nestjs_mysql',
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
