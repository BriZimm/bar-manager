import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
    {path: 'bartools', component: BarToolsComponent },
    {path: 'brandy', component: BrandyComponent },
    {path: 'gin', component: GinComponent },
    {path: 'rum', component: RumComponent },
    {path: 'tequila', component: TequilaComponent },
    {path: 'vodka', component: VodkaComponent },
    {path: 'whiskey', component: WhiskeyComponent },
    {path: 'scotch', component: ScotchComponent },
    {path: 'liqueurs-cordials', component: LiqueursCordialsComponent },
    {path: 'mixers', component: MixersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
                routes, 
                { enableTracing: true }
            )],
  exports: [RouterModule]
})
export class LiquorDbRoutingModule { }