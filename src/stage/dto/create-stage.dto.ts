export class CreateStageDto {
  readonly name: string;
  readonly description: string;
  readonly totalWeight: number;
  readonly totalPrice: number;
  revenueId?: string;
}
