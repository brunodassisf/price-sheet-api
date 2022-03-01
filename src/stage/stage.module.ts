import { Module } from '@nestjs/common';
import { StageService } from './stage.service';
import { StageController } from './stage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Stage } from './entities/stage.entity';
import { Revenue } from 'src/revenue/entities/revenue.entity';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stage, Revenue, Ingredient])],
  controllers: [StageController],
  providers: [StageService],
})
export class StageModule {}
