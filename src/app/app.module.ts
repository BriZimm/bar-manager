import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from  '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { RecipeComponent } from './recipe/recipe.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LiquorDbComponent } from './liquor-db/liquor-db.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RecipeComponent,
    InventoryComponent,
    LiquorDbComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule
            .register('ngsw-worker.js',
                        {
                            enabled: environment.production
                        }),
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
