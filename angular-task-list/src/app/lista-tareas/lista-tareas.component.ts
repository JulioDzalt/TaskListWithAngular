import { Component, OnInit } from '@angular/core';


import {Tarea} from "./../models/Tarea.model"


@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
	
  listaTareas: Tarea[] = []; //una lista de elementos de tipo Tarea

  constructor() { }

  ngOnInit(): void {
  }

  guardarTarea(descripcion:string, fecha:string):boolean{

  	var tarea:Tarea = new Tarea(descripcion,fecha)
  	console.log(tarea)

  	this.listaTareas.push(tarea)

  	return false; //Esto es debido a que cuando se envia un formulario se recarga la pagina, si la accion retorna un true
  }

}
