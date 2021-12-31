import { Revenue } from 'src/revenue/entities/revenue.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Revenue, (revenue) => revenue.category)
  revenue: Revenue[];
}
