import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Stage {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  totalWeight: number;

  @Column()
  totalPrice: number;

  @CreateDateColumn()
  dateCreated: Date;

  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient[];
}
