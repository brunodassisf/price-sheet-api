import { Stage } from 'src/stage/entities/stage.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @ManyToMany(() => Stage)
  @JoinTable()
  stage: Stage;

  @CreateDateColumn()
  dateCreated: Date;
}
