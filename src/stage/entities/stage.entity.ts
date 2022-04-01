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
  description: string;

  @Column()
  totalWeight: number;

  @Column()
  totalPrice: number;

  @CreateDateColumn()
  dateCreated: Date;

  @ManyToOne(() => Revenue, (stage) => stage.stages)
  revenue: Revenue;
}
