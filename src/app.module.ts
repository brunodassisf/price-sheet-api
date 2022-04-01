import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';

import { RevenueModule } from './revenue/revenue.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { StageModule } from './stage/stage.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_BD,
      synchronize: true,
      autoLoadEntities: true,
    }),
    RevenueModule,
    CategoryModule,
    StageModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
