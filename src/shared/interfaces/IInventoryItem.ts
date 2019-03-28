export interface IInventoryItem {
    userID: number;
    categoryID: number;
    itemImage: string;
    itemName: string;
    itemUpc : string;
    itemSize: string;
    itemAmountPercent: number;
    shop: boolean;
}