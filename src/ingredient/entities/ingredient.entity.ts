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
  qtdPurchase: number;

  @Column()
  pricePurchase: number;

  @Column()
  qtdRevenue: number;

  @Column()
  ingredientCost: number;

  @CreateDateColumn()
  dateCreated: Date;

  @ManyToOne(() => Stage, (stage) => stage.ingredients)
  stage: Stage;
}
