import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-tile-space',
  templateUrl: './tile-space.component.html',
  styleUrl: './tile-space.component.css'
})
export class TileSpaceComponent {
  tilesData: any[] = []; // This will hold the data for your tiles

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTilesData();
  }

  getTilesData() {
    this.dataService.getTilesData().subscribe( 
      data => {
        console.log("data received ", data.tiles);
        console.log(typeof data);
        this.tilesData = data.tiles; // Assign the data received from the service to your component's property
      },
      error => {
        console.error('There was an error retrieving the tiles data:', error);
      }
    );
  }
}