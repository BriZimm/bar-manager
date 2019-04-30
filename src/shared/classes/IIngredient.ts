export interface IIngredient {
    ingredientId: number;
    recipeID?: number;
    type: number;
    alcoholID?: number;
    mixerID?: number;
    garnishID?: number;
    amount: string;
    measure: string;
}