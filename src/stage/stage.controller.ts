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
import { StageService } from './stage.service';

import { Stage } from './entities/stage.entity';

@Controller('stage')
export class StageController {
  constructor(private readonly stageService: StageService) {}

  @Post()
  create(@Body() stage: Stage) {
    return this.stageService.create(stage);
  }

  @Get()
  findAll() {
    return this.stageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() stage: Stage) {
    return this.stageService.update(+id, stage);
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: string) {
    const result = this.stageService.remove(id);
    return {
      data: result,
      message: 'Etapa excluída com sucesso',
    };
  }
}
