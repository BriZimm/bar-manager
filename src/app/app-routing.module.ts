import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { RecipeComponent } from './recipe/recipe.component';
import { LiquorDbComponent } from './liquor-db/liquor-db.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'inventory', component: InventoryComponent },
    {path: 'recipes', component: RecipeComponent },
    {path: 'liquor-db', component: LiquorDbComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
                routes, 
                { enableTracing: true }
            )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
