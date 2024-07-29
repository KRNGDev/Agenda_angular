import { Injectable } from '@angular/core';
import { Tarea } from '../interface/tarea';

@Injectable({
  providedIn: 'root'
})
export class GestortareasService {

  tareas: Tarea[] = [];
  constructor() { }
  agregar(tarea: Tarea) {
    this.tareas.push(tarea);
  }
}
