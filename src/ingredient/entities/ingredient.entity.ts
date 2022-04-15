import { Stage } from 'src/stage/entities/stage.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  qtdTotal: number;

  @Column()
  priceTotal: number;

  @Column()
  amountUsed: number;

  @Column()
  cost: number;

  @CreateDateColumn()
  dateCreated: Date;

  @ManyToOne(() => Stage, (stage) => stage.ingredient)
  stage: Stage;
}
