import {
  Column,
  CreateDateColumn,
  Entity,
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

  @CreateDateColumn()
  dateCreated: Date;

  @ManyToOne(() => Category, (category) => category.revenue, {
    eager: true,
  })
  category: Category;

  @OneToMany(() => Stage, (stage) => stage.revenue, {
    eager: true,
  })
  stages: Stage[];
}
