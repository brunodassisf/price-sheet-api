import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Category } from 'src/category/entities/category.entity';

@Entity()
export class Revenue {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.revenue, {
    cascade: true,
    eager: true,
  })
  category: Revenue;

  @CreateDateColumn()
  dateCreated: Date;
}
