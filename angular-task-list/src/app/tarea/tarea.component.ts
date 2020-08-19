import { Component, OnInit, Input, HostBinding } from '@angular/core';

import {Tarea} from "./../models/Tarea.model"

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})

export class TareaComponent implements OnInit {
  
  @Input() tarea: Tarea; //una variable del tipo Tarea, con el decorador @input le decimos que su valor puede pasarse por paamtros a traevez de la llamda de este componente

  @HostBinding('attr.class') cssClass = 'card text-center';

  constructor() { }

  ngOnInit(): void {
  }

}
