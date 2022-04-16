import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { Stage } from 'src/stage/entities/stage.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';

import { Revenue } from './entities/revenue.entity';

@Injectable()
export class RevenueService {
  constructor(
    @InjectRepository(Revenue)
    private readonly revenueRepository: Repository<Revenue>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,

    @InjectRepository(Stage)
    private readonly stageRepository: Repository<Stage>,
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
    return this.revenueRepository.find({ relations: ['category', 'stages'] });
  }

  findOne(id: string): Promise<Revenue> {
    return this.revenueRepository.findOne(id, {
      relations: ['category', 'stages'],
    });
  }

  async update(id: string, revenue: UpdateRevenueDto): Promise<any> {
    const update = this.revenueRepository.update(id, revenue);
    return update;
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

  private async preloadStage(stage: Stage, revenue: Revenue): Promise<any> {
    return this.stageRepository.save({ ...stage, revenue });
  }
}
