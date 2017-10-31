import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat = 47.49815;
  lng = 19.0556;
  zoom = 18;

  constructor() { }

  ngOnInit() {
  }

}
