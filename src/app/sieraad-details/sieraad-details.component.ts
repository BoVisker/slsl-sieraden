import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sieraad } from '../interfaces/sieraad';
import { Sieraden } from '../sieraden';


@Component({
  selector: 'app-sieraad-details',
  templateUrl: './sieraad-details.component.html',
  styleUrls: ['./sieraad-details.component.scss']
})

export class SieraadDetailsComponent implements OnInit {
  popup = false
  name = 'Angular';
  
  sieraad: Sieraad | undefined;

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.sieraad = Sieraden.find(sieraad => sieraad.id === productIdFromRoute);
  }
}
