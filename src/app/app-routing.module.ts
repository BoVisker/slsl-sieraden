import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SieraadDetailsComponent } from './sieraad-details/sieraad-details.component';
import { DisplaySieradenComponent } from './display-sieraden/display-sieraden.component';
import { OveronsComponent } from './overons/overons.component';
import { RetourComponent } from './retour/retour.component';
import { HoebestelikComponent } from './hoebestelik/hoebestelik.component';
import { HoeretourComponent } from './hoeretour/hoeretour.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: DisplaySieradenComponent },
  { path: 'product/:productId', component: SieraadDetailsComponent },
  { path: 'overons', component: OveronsComponent },
  { path: 'retour', component: RetourComponent },
  { path: 'hoebestelik', component: HoebestelikComponent },
  { path: 'hoeretour', component: HoeretourComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
