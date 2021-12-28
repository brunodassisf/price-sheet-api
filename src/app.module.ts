import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';

import { RevenueModule } from './revenue/revenue.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true }),
    RevenueModule,
    CategoryModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
