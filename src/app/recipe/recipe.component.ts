import { Component, OnInit, ViewChild } from '@angular/core';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { IRecipe } from 'src/shared/classes/IRecipe';
import { ApiService } from 'src/services/api.service';
import { mergeMap } from 'rxjs/operators';
import { IIngredient } from 'src/shared/classes/IIngredient';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { IIngredientItem } from 'src/shared/classes/IIngredientItem';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'bm-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

    constructor(private apiService: ApiService) { }

    @ViewChild(AddRecipeComponent)
    addRecipeComponent: AddRecipeComponent;
    @ViewChild(ViewRecipeComponent)
    viewRecipeComponent: ViewRecipeComponent;

    recipes: IRecipe[];
    selectedRecipe: IRecipe;
    categoryId: number;
    alcoholId: number;

    ngOnInit() {
        this.getRecipes();
    }

    addRecipe($event) {
        this.addRecipeComponent.show();
    }

    viewRecipe(recipe) {
        this.selectedRecipe = recipe;
        this.viewRecipeComponent.show();
    }

    getRecipes() {
        this.apiService.getAllRecipes()
            .subscribe(recipes => {
                recipes.forEach(recipe => {
                    this.categoryId = recipe.recipeCategoryID;
                    const alcohols = (recipe.ingredients as IIngredient[]).filter(x => x.type === 1);
                    this.alcoholId = alcohols[0].alcoholID;
                    return this.apiService.getAlcoholById(this.alcoholId)
                        .pipe(mergeMap(alcohol => {
                            recipe.mainAlcohol = alcohol.alcoholName;
                            return this.apiService.getRecipeCategoryById(this.categoryId);
                        }))
                        .subscribe(category => {
                            recipe.recipeCategory = category;
                            return this.apiService.getAlcoholById(this.alcoholId);
                        });
                });
                this.recipes = recipes;
            });
    }
}
