import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IRecipe } from 'src/shared/classes/IRecipe';
import { ApiService } from 'src/services/api.service';
import { IIngredient } from 'src/shared/classes/IIngredient';
import { IIngredientItem } from 'src/shared/classes/IIngredientItem';
import { IAlcohol } from 'src/shared/classes/IAlcohol';
import { IMixer } from 'src/shared/classes/IMixer';
import { IGarnish } from 'src/shared/classes/IGarnish';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'bm-view-recipe',
    templateUrl: './view-recipe.component.html',
    styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnChanges {
    @Input() recipe: IRecipe;

    visible = false;
    // alcoholList: IAlcohol[] = [];
    // mixerList: IMixer[] = [];
    // garnishList: IGarnish[] = [];

    constructor(private apiService: ApiService) { }

    ngOnChanges() {
        if (this.recipe) {
            this.apiService.getGlassById(this.recipe.glassID)
            .subscribe(glass => this.recipe.glass = glass);

            this.bindIngredients();
        }
    }

    bindIngredients() {
        const alcohols = (this.recipe.ingredients as IIngredient[]).filter(item => item.alcoholID !== null);
        alcohols.forEach(a => {
            this.apiService.getAlcoholById(a.alcoholID)
                .subscribe(alcohol => {
                    const itemIndex = (this.recipe.ingredients as IIngredient[]).findIndex(item => item.alcoholID === alcohol.alcoholID);
                    (this.recipe.ingredients as IIngredient[])[itemIndex].alcoholName = alcohol.alcoholName;
                });
        });

        const mixers = (this.recipe.ingredients as IIngredient[]).filter(item => item.mixerID !== null);
        mixers.forEach(m => {
            this.apiService.getMixerById(m.mixerID)
                .subscribe(mixer => {
                    const itemIndex = (this.recipe.ingredients as IIngredient[]).findIndex(item => item.mixerID === mixer.mixerId);
                    (this.recipe.ingredients as IIngredient[])[itemIndex].mixerName = mixer.mixerName;
                });
        });

        const garnishes = (this.recipe.ingredients as IIngredient[]).filter(item => item.garnishID !== null);
        garnishes.forEach(m => {
            this.apiService.getGarnishById(m.garnishID)
                .subscribe(garnish => {
                    const itemIndex = (this.recipe.ingredients as IIngredient[]).findIndex(item => item.garnishID === garnish.garnishID);
                    (this.recipe.ingredients as IIngredient[])[itemIndex].garnishName = garnish.garnishName;
                });
        });
    }

    hide() {
        this.visible = false;
    }

    show() {
        this.visible = true;
    }
}
