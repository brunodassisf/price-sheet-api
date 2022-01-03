import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';

import { Revenue } from './entities/revenue.entity';

@Injectable()
export class RevenueService {
  constructor(
    @InjectRepository(Revenue)
    private revenueRepositiry: Repository<Revenue>,
  ) {}

  async create(revenue: Revenue): Promise<Revenue> {
    const create = this.revenueRepositiry.save(revenue);
    return create;
  }

  findAll(): Promise<Revenue[]> {
    return this.revenueRepositiry.find({ relations: ['category'] });
  }

  findOne(id: string): Promise<Revenue> {
    return this.revenueRepositiry.findOne(id);
  }

  async update(id: number, revenue: Revenue): Promise<string> {
    const uptade = this.revenueRepositiry.update(id, revenue);
    return 'Receita atualizada';
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.revenueRepositiry.delete(id);
  }
}
