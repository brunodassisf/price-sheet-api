import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepositiry: Repository<Ingredient>,
  ) {}

  async create(ingredient: Ingredient) {
    const create = this.ingredientRepositiry.save(ingredient);
    return create;
  }

  findAll(): Promise<Ingredient[]> {
    return this.ingredientRepositiry.find();
  }

  findOne(id: string) {
    return this.ingredientRepositiry.findOne(id);
  }

  async update(id: number, ingredient: Ingredient) {
    const uptade = this.ingredientRepositiry.update(id, ingredient);
    return 'Ingrediente atualizada';
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.ingredientRepositiry.delete(id);
  }
}
