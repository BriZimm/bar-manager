import { IGlass } from './IGlass';
import { IIngredientItem } from './IIngredientItem';
import { IRecipeCategory } from './IRecipeCategory';
import { IIngredient } from './IIngredient';
import { ITag } from './ITag';

export interface IRecipe {
    id: number;
    name: string;
    recipeImage: string;
    recipeCategory: IRecipeCategory;
    tags?: ITag[];
    glass: IGlass;
    description: string;
    instructions: string;
    ingredients: IIngredientItem[] | IIngredient[];
    dateCreated?: string;
    dateModified?: string;
    glassID?: number;
    recipeCategoryID?: number;
    mainAlcohol?: string;
}
