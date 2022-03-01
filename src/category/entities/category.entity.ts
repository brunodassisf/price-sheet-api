import { Revenue } from 'src/revenue/entities/revenue.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Revenue, (revenue) => revenue.category)
  revenue: Revenue[];
}
