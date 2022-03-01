import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateRevenueDto } from './dto/create-revenue.dto';

import { Revenue } from './entities/revenue.entity';

@Injectable()
export class RevenueService {
  constructor(
    @InjectRepository(Revenue)
    private readonly revenueRepository: Repository<Revenue>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(revenue: CreateRevenueDto): Promise<Revenue> {
    const category = await this.preloadCategory(
      revenue.category.id,
      revenue.category.name,
    );

    const create = this.revenueRepository.save({ ...revenue, category });
    return create;
  }

  findAll(): Promise<Revenue[]> {
    return this.revenueRepository.find({ relations: ['category'] });
  }

  findOne(id: string): Promise<Revenue> {
    return this.revenueRepository.findOne(id, { relations: ['category'] });
  }

  async update(id: number, revenue: Revenue): Promise<string> {
    const uptade = this.revenueRepository.update(id, revenue);
    return 'Receita atualizada';
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.revenueRepository.delete(id);
  }

  private async preloadCategory(
    id: string | null,
    name: string,
  ): Promise<Category> {
    if (id) {
      const category = await this.categoryRepository.findOne(id);
      return category;
    }
    const newCategory = await this.categoryRepository.save({ name });
    return newCategory;
  }
}
