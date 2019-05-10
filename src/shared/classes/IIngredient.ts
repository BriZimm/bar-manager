export interface IIngredient {
    ingredientId: number;
    recipeID?: number;
    type: number;
    alcoholID?: number;
    alcoholName?: string;
    mixerID?: number;
    mixerName?: string;
    garnishID?: number;
    garnishName?: string;
    amount: string;
    measure: string;
}