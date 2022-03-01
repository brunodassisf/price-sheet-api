import { Module } from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { RevenueController } from './revenue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Revenue } from './entities/revenue.entity';
import { Category } from 'src/category/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Revenue, Category])],
  controllers: [RevenueController],
  providers: [RevenueService],
})
export class RevenueModule {}
