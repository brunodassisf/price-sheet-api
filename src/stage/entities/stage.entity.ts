import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Revenue } from 'src/revenue/entities/revenue.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
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

  @CreateDateColumn()
  dateCreated: Date;
}
