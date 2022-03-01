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
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';

@Controller('stage')
export class StageController {
  constructor(private readonly stageService: StageService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  @HttpCode(201)
  async create(@Body() createStage: CreateStageDto) {
    const item = await this.stageService.create(createStage);
    return {
      message: 'Etapa criada com sucesso',
      data: item,
    };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @HttpCode(200)
  async findAll() {
    const itens = await this.stageService.findAll();
    return {
      data: itens,
    };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(200)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const item = await this.stageService.findOne(id);
    return {
      data: item,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStageDto: UpdateStageDto) {
    return this.stageService.update(id, updateStageDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id') id: string) {
    const item = await this.stageService.remove(id);
    return {
      data: item,
      message: 'Etapa excluída com sucesso',
    };
  }
}
