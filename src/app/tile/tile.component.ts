import { Input ,Component } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
  @Input() tileData: any;
  buttonText= "Go to Store";
}
