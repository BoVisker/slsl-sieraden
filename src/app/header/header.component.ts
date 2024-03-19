import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bericht = 'Aangezien we nog steeds bezig zijn met het updaten van de website kan het voorkomen dat iets het niet doet of er niet goed uit ziet. We proberen alles zo snel mogelijk op te lossen, als er iets waarvan u denkt:"Dit moet even bekeken worden." kunt u altijd te recht bij onze e-mail info@slsl-sieraden.nl.'
}
