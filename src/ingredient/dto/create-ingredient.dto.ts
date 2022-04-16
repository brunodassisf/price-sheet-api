export class CreateIngredientDto {
  readonly name: string;
  readonly description: string;
  readonly qtdTotal: number;
  readonly amountUsed: number;
  readonly priceTotal: number;
  readonly cost: number;
  stageId?: string;
}
