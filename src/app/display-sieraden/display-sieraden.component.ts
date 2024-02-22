import { Component } from '@angular/core';
import { Sieraden } from '../sieraden';

@Component({
  selector: 'app-display-sieraden',
  templateUrl: './display-sieraden.component.html',
  styleUrls: ['./display-sieraden.component.scss']
})
export class DisplaySieradenComponent {
  sieraad = Sieraden
}
