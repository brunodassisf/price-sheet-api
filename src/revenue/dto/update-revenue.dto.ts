import { PartialType } from '@nestjs/mapped-types';
import { CreateRevenueDto, ICategory } from './create-revenue.dto';

export class UpdateRevenueDto extends PartialType(CreateRevenueDto) {
  readonly name?: string;
  readonly description?: string;
  readonly category?: ICategory;
}
