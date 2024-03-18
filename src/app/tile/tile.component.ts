import { Input ,Component } from '@angular/core';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})

export class TileComponent {
  constructor(){}

  @Input() tileData: any;
  buttonText= "Go to Store";
}
