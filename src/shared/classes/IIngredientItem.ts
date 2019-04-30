import { IAlcohol } from './IAlcohol';
import { IMixer } from './IMixer';
import { IGarnish } from './IGarnish';

export interface IIngredientItem {
    type: number;
    alcohol: IAlcohol;
    mixer: IMixer;
    garnish: IGarnish;
    amount: string;
    measure: string;
}