import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { DeleteResult, Repository } from 'typeorm';

import { Stage } from './entities/stage.entity';

@Injectable()
export class StageService {
  constructor(
    @InjectRepository(Stage)
    private stageRepositiry: Repository<Stage>,

    @InjectRepository(Ingredient)
    private ingredientRepositiry: Repository<Ingredient>,
  ) {}

  async create(stage: Stage) {
    const create = this.stageRepositiry.save(stage);
    return create;
  }

  findAll(): Promise<Stage[]> {
    return this.stageRepositiry.find({ relations: ['ingredients'] });
  }

  findOne(id: string) {
    return this.stageRepositiry.findOne(id, { relations: ['ingredients'] });
  }

  async update(id: number, stage: Stage) {
    const ingredients = await Promise.all(
      stage.ingredients.map((item) => this.preloadIngredientByName(item)),
    );
    const uptade = this.stageRepositiry.update(id, { ...stage, ingredients });
    return 'Etapa atualizada';
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.stageRepositiry.delete(id);
  }

  private async preloadIngredientByName(obj: Ingredient): Promise<Ingredient> {
    const ingredient = await this.ingredientRepositiry.findOne(obj);
    if (ingredient) {
      return ingredient;
    }
    return this.ingredientRepositiry.create(obj);
  }
}
