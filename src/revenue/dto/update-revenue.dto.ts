import { PartialType } from '@nestjs/mapped-types';
import { Stage } from 'src/stage/entities/stage.entity';
import { CreateRevenueDto } from './create-revenue.dto';

export class UpdateRevenueDto extends PartialType(CreateRevenueDto) {
  stage: Stage[];
}
