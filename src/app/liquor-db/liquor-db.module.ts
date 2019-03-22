import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { LiquorDbRoutingModule } from './liquor-db-routing.module';
import { BarToolsComponent } from './bar-tools/bar-tools.component';
import { BrandyComponent } from './brandy/brandy.component';
import { GinComponent } from './gin/gin.component';
import { RumComponent } from './rum/rum.component';
import { TequilaComponent } from './tequila/tequila.component';
import { VodkaComponent } from './vodka/vodka.component';
import { WhiskeyComponent } from './whiskey/whiskey.component';
import { ScotchComponent } from './scotch/scotch.component';
import { LiqueursCordialsComponent } from './liqueurs-cordials/liqueurs-cordials.component';
import { MixersComponent } from './mixers/mixers.component';
import { LiquorDbComponent } from './liquor-db.component';

@NgModule({
  declarations: [
    LiquorDbComponent,
    BarToolsComponent,
    BrandyComponent,
    GinComponent,
    RumComponent,
    TequilaComponent,
    VodkaComponent,
    WhiskeyComponent,
    ScotchComponent,
    LiqueursCordialsComponent,
    MixersComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    LiquorDbRoutingModule
  ],
  providers: [],
  bootstrap: [LiquorDbComponent]
})
export class LiquorDbModule { }