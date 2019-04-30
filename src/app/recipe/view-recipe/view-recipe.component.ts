import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from 'src/shared/classes/IRecipe';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'bm-view-recipe',
    templateUrl: './view-recipe.component.html',
    styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {
    @Input() recipe: IRecipe;

    visible = false;

    constructor() { }

    ngOnInit() {
    }

    hide() {
        this.visible = false;
    }

    show() {
        this.visible = true;
    }
}
