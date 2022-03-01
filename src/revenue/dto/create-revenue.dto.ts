export class CreateRevenueDto {
  name: string;
  description: string;
  category: ICategory;
}

export interface ICategory {
  id: string | null;
  name: string;
}
