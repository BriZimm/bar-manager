import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'bm-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    items: MenuItem[];

    constructor() { }

    ngOnInit() {
        this.items = [
            {label: 'Home', icon: 'fas fa-home', routerLink: ['/home']},
            {label: 'Inventory', icon: 'fas fa-barcode', routerLink: ['/inventory']},
            {label: 'Recipes', icon: 'fas fa-cocktail', routerLink: ['/recipes']},
            {label: 'Liquor Info', icon: 'fas fa-wine-bottle', routerLink: ['/liquor-db']}
        ];
    }

}
