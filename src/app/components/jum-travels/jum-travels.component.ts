import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jum-travels',
  templateUrl: './jum-travels.component.html',
  styleUrls: ['./jum-travels.component.css']
})
export class JumTravelsComponent implements OnInit {
  
  travels = [
    {
      id: 1,
      img: '../../../assets/santander.png',
      title: 'Málaga',
      description: 'A 414 kilólimetros de distancia',
      colorBackground: '#D93B30'
    },
    {
      id: 2,
      img: '../../../assets/vielha.png',
      title: 'Vielha',
      description: 'A 452 kilólimetros de distancia',
      colorBackground: '#CC2D4A'
    },
    {
      id: 3,
      img: '../../../assets/santander.png',
      title: 'Santander',
      description: 'A 341 kilólimetros de distancia',
      colorBackground: '#BC1A6E'
    },
    {
      id: 4,
      img: '../../../assets/sallent.png',
      title: 'Sallet de Gállego',
      description: 'A 383 kilólimetros de distancia',
      colorBackground: '#DE3151'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
