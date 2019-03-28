import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IInventoryItem } from 'src/shared/interfaces/IInventoryItem';

@Component({
    selector: 'bm-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InventoryComponent implements OnInit {

    inventoryItems: IInventoryItem[];

    constructor() { }

    ngOnInit() {
        this.inventoryItems = [
            {
                userID: 1,
                categoryID: 4,
                itemName: 'Casamigos Tequila Blanco',
                itemImage: '../../assets/images/placeholder-bottle.png',
                itemUpc : '123456',
                itemSize: '750ml',
                itemAmountPercent: 75,
                shop: false
            } as IInventoryItem,
            {
                userID: 1,
                categoryID: 56,
                itemName: 'Captain Morgan Rum',
                itemImage: '../../assets/images/placeholder-bottle.png',
                itemUpc : '6543212345',
                itemSize: '750ml',
                itemAmountPercent: 10,
                shop: true
            } as IInventoryItem,
            {
                userID: 1,
                categoryID: 88,
                itemName: 'Pineappple Juice',
                itemImage: '../../assets/images/placeholder-bottle.png',
                itemUpc : '789345623456',
                itemSize: '1 Liter',
                itemAmountPercent: 100,
                shop: false
            } as IInventoryItem,
            {
                userID: 1,
                categoryID: 15,
                itemName: 'Lemon Juice',
                itemImage: '../../assets/images/placeholder-bottle.png',
                itemUpc : '35168468426846',
                itemSize: '750ml',
                itemAmountPercent: 0,
                shop: false
            } as IInventoryItem,
        ]
    }

}
