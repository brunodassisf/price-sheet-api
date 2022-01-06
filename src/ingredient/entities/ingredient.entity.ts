import { Stage } from 'src/stage/entities/stage.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  qtdPurchased: number;

  @Column()
  qtdRevenue: number;

  @Column()
  ingredientCost: number;

  @ManyToMany(() => Stage, (stage) => stage.ingredients)
  stages: Stage[];

  @CreateDateColumn()
  dateCreated: Date;
}
