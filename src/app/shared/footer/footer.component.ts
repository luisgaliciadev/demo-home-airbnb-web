import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date = new Date();
  year = 0;

  assistances = [
    'Centro de ayuda', 
    'Información de seguridad', 
    'Opciones de cancelación', 
    'Nuestra respuesta ante la COVID-19', 
    'Accesibilidad para todos', 
    '¿Problemas en tu barrio?', 
  ];

  communitys = [
    'Airbnb.org para emergencias',
    'Ayuda a los refugiados afganos',
    'Diversidad y comunidad',
    'Lucha contra la discriminación'
  ];

  hosts = [
    'Hazte anfitrión',
    'AirCover para anfitriones',
    'Recursos para anfitriones',
    'Visita el foro de la comunidad',
    'Ser un anfitrión responsable'
  ];

  abouts = [
    'Newsroom',
    'Descubre las nuevas funciones',
    'Carta de los fundadores',
    'Empleo',
    'Inversores',
    'Airbnb Luxe'
  ];

  futureTravels = [
    'Vacaciones en la ciudad',
    'Vacaciones en la playa',
    'Vacaciones con hostoria',
    'Vacaciones en una isla',
    'Vacaciones en la montaña',
    'Otros destinos populares'
  ];

  constructor() { 
    this.year = this.date.getFullYear();
  }

  ngOnInit(): void {
  }
}
