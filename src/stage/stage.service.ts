import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Stage } from './entities/stage.entity';

@Injectable()
export class StageService {
  constructor(
    @InjectRepository(Stage)
    private stageRepositiry: Repository<Stage>,
  ) {}

  async create(stage: Stage) {
    const create = this.stageRepositiry.save(stage);
    return create;
  }

  findAll(): Promise<Stage[]> {
    return this.stageRepositiry.find();
  }

  findOne(id: string) {
    return this.stageRepositiry.findOne(id);
  }

  async update(id: number, stage: Stage) {
    const uptade = this.stageRepositiry.update(id, stage);
    return 'Etapa atualizada';
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.stageRepositiry.delete(id);
  }
}
