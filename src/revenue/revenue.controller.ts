import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
import { Revenue } from './entities/revenue.entity';

@Controller('revenue')
export class RevenueController {
  constructor(private revenueService: RevenueService) {}

  @Post()
  create(@Body() revenue: Revenue) {
    return this.revenueService.create(revenue);
  }

  @Get()
  findAll() {
    return this.revenueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() revenue: Revenue) {
    return this.revenueService.update(+id, revenue);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenueService.remove(+id);
  }
}
