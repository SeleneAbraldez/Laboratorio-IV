import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number = -34.662799;
  lng: number = -58.3642594;
  zoom: number = 12;

  clickedMarker(label: string, index: number) {
    console.log(`marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: -34.61315,
      lng: -58.37723,
      label: 'Buenos Aires',
      draggable: true
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}


interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}