import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SieraadDetailsComponent } from './sieraad-details/sieraad-details.component';
import { DisplaySieradenComponent } from './display-sieraden/display-sieraden.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: DisplaySieradenComponent },
  { path: 'products/:productId', component: SieraadDetailsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
