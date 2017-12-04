import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent implements OnInit {

  strings = ["¡Quiero torta!",
             "La niña baila marinera en el patio",
             "Pensando en lo mismo",
             "Me gusta la música",
             "Camaron que se duerme se lo lleva la corriente",
             "Laboratoria es código que transforma",
             "Todo va a estar bien",
             "Me encanta bailar para relajarme",
             "El texto se acabó. Fin."];

  constructor() { }

  ngOnInit() {
  }

}
