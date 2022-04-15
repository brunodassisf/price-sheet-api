import { Revenue } from 'src/revenue/entities/revenue.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Revenue, (revenue) => revenue.category)
  revenue: Revenue;
}
