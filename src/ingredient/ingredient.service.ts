import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stage } from 'src/stage/entities/stage.entity';
import { Repository } from 'typeorm';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,

    @InjectRepository(Stage)
    private readonly stageRepository: Repository<Stage>,
  ) {}

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const stage = await this.preLoadingStage(createIngredientDto.stageId);
    this.updateStage(createIngredientDto, stage);
    delete createIngredientDto.stageId;
    const create = this.ingredientRepository.save({
      ...createIngredientDto,
      stage,
    });

    return create;
  }

  findAll() {
    return `This action returns all ingredient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: string, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }

  private preLoadingStage = (id: string): Promise<Stage> => {
    const findStage = this.stageRepository.findOne(id);
    return findStage;
  };

  private updateStage = async (i: CreateIngredientDto, s: Stage) => {
    const mutationStage = {
      ...s,
      totalWeight: s.totalWeight + i.amountUsed,
      totalPrice: s.totalPrice + i.cost,
    };
    await this.stageRepository.update(mutationStage.id, mutationStage);
  };
}
