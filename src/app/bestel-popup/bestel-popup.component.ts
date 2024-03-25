import { Component } from '@angular/core';
import { Sieraden } from '../sieraden';


@Component({
  selector: 'app-bestel-popup',
  templateUrl: './bestel-popup.component.html',
  styleUrls: ['./bestel-popup.component.scss']
})
export class BestelPopupComponent {
  Sieraad = Sieraden
}
