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
import { HomeComponent } from './home/home.component';
import { LiquorDbModule } from './liquor-db/liquor-db.module';
import { InventoryModule } from './inventory/inventory.module';
import { FormsModule } from '@angular/forms';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { BlobModule } from 'angular-azure-blob-service';
import { CardModule } from 'primeng/card';
import { ViewRecipeComponent } from './recipe/view-recipe/view-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RecipeComponent,
    HomeComponent,
    AddRecipeComponent,
    ViewRecipeComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ServiceWorkerModule
            .register('ngsw-worker.js',
                        {
                            enabled: environment.production
                        }),
    FormsModule,
    CardModule,
    DialogModule,
    PanelModule,
    TableModule,
    FileUploadModule,
    MenuModule,
    InputTextModule,
    InputTextareaModule,
    AutoCompleteModule,
    DropdownModule,
    ButtonModule,
    LiquorDbModule,
    InventoryModule,
    HttpClientModule,
    BlobModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
