import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  futureTravels = [
    'Vacaciones en la ciudad',
    'Vacaciones en la playa',
    'Vacaciones con hostoria',
    'Vacaciones en una isla',
    'Vacaciones en la montaña',
    'Otros destinos populares'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
