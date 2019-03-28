import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { InventoryComponent } from './inventory.component';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataViewModule,
    CheckboxModule,
    SliderModule,
    PanelModule
  ],
  providers: [],
  bootstrap: []
})
export class InventoryModule { }