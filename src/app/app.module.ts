import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisplaySieradenComponent } from './display-sieraden/display-sieraden.component';
import { SieraadDetailsComponent } from './sieraad-details/sieraad-details.component';
import { AppRoutingModule } from './app-routing.module';
import { OveronsComponent } from './overons/overons.component';
import { HoebestelikComponent } from './hoebestelik/hoebestelik.component';
import { BestelPopupComponent } from './bestel-popup/bestel-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DisplaySieradenComponent,
    SieraadDetailsComponent,
    OveronsComponent,
    HoebestelikComponent,
    BestelPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
