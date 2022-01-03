import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categorysRepository: Repository<Category>,
  ) {}

  async create(category: Category): Promise<Category> {
    return this.categorysRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.categorysRepository.find();
  }

  findOne(id: string): Promise<Category> {
    return this.categorysRepository.findOne(id);
  }

  async update(id: number, category: Category): Promise<string> {
    this.categorysRepository.update(+id, category);
    return 'Category atualizada';
  }

  async remove(id: number): Promise<string> {
    this.categorysRepository.delete(id);
    return 'Categoria deletada';
  }
}
