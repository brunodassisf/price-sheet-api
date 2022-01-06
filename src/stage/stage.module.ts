import { Module } from '@nestjs/common';
import { StageService } from './stage.service';
import { StageController } from './stage.controller';
import { Stage } from './entities/stage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stage, Ingredient])],
  controllers: [StageController],
  providers: [StageService],
})
export class StageModule {}
