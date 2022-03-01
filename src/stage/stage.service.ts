import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Revenue } from 'src/revenue/entities/revenue.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateStageDto } from './dto/create-stage.dto';
import { IIngredient, UpdateStageDto } from './dto/update-stage.dto';
import { Stage } from './entities/stage.entity';

@Injectable()
export class StageService {
  constructor(
    @InjectRepository(Stage)
    private readonly stageRepository: Repository<Stage>,

    @InjectRepository(Revenue)
    private readonly revenueRepository: Repository<Revenue>,

    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}
  async create(createStageDto: CreateStageDto): Promise<Stage> {
    const revenue = await this.preloadRevenue(createStageDto.revenueId);
    const create = this.stageRepository.save({ ...createStageDto, revenue });
    return create;
  }

  async findAll() {
    const item = await this.stageRepository.find();
    return item;
  }

  async findOne(id: string) {
    const item = await this.stageRepository.findOne(id);
    return item;
  }

  async update(id: string, updateStageDto: UpdateStageDto) {
    console.log(updateStageDto);
    const ingredients =
      updateStageDto.ingredients &&
      (await Promise.all(
        updateStageDto.ingredients.map((item) => this.preloadIngredients(item)),
      ));
    console.log(ingredients);
    const item = await this.stageRepository.update(id, updateStageDto);
    return item;
  }

  async remove(id: string): Promise<DeleteResult> {
    const item = await this.stageRepository.delete(id);
    return item;
  }

  private preloadRevenue = (id: string): Promise<Revenue> => {
    return this.revenueRepository.findOne(id);
  };

  private preloadIngredients = (item: IIngredient): Promise<Ingredient> => {
    return this.ingredientRepository.save(item);
  };
}
