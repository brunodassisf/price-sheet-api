export class CreateIngredientDto {
  readonly name: string;
  readonly description: string;
  readonly qtdTotal: number;
  readonly priceTotal: number;
  readonly cost: number;
  stageId?: string;
}
