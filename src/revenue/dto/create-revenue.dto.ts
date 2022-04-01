export class CreateRevenueDto {
  readonly name: string;
  readonly description: string;
  readonly category: ICategory;
}

export interface ICategory {
  id: string | null;
  name: string;
}
