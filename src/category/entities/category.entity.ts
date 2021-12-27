import { Revenue } from 'src/revenue/entities/revenue.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  IsNull,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Revenue, (revenue) => revenue.category)
  revenue: Revenue[];
}
