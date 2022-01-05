import { Revenue } from 'src/revenue/entities/revenue.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  totalWeight: number;

  @Column()
  totalPrice: number;

  @ManyToOne(() => Revenue, (revenue) => revenue.stages)
  revenue: Revenue;

  @CreateDateColumn()
  dateCreated: Date;
}
