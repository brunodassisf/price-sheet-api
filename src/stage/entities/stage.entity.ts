import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Revenue } from 'src/revenue/entities/revenue.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
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

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.stages, {
    cascade: true,
  })
  @JoinTable()
  ingredients: Ingredient[];

  @CreateDateColumn()
  dateCreated: Date;
}
