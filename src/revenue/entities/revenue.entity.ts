import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Category } from 'src/category/entities/category.entity';
import { Stage } from 'src/stage/entities/stage.entity';

@Entity()
export class Revenue {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.revenue, {
    cascade: true,
    eager: true,
  })
  category: Revenue;

  @CreateDateColumn()
  dateCreated: Date;
}
