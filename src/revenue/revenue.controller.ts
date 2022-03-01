import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
} from '@nestjs/common';
import { RevenueService } from './revenue.service';

import { Revenue } from './entities/revenue.entity';
import { CreateRevenueDto } from './dto/create-revenue.dto';

@Controller('revenue')
export class RevenueController {
  constructor(private revenueService: RevenueService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  @HttpCode(201)
  async create(@Body() revenue: CreateRevenueDto) {
    const item = await this.revenueService.create(revenue);
    return {
      message: 'Receita cadastrada com sucesso',
      data: item,
    };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @HttpCode(200)
  async findAll() {
    const revenues = await this.revenueService.findAll();
    return {
      data: revenues,
    };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(200)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const revenue = await this.revenueService.findOne(id);
    return {
      data: revenue,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() revenue: Revenue) {
    return this.revenueService.update(+id, revenue);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id') id: string) {
    const revenues = await this.revenueService.remove(id);
    return {
      data: revenues,
      message: 'Receita excluída com sucesso',
    };
  }
}
