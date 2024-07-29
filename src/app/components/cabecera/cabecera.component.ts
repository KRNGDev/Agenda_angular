import { Component, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../interface/tarea';
import { GestortareasService } from '../../service/gestortareas.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  public nombre: string = ""
  public fecha: string = "";

  constructor(public gestorTareas: GestortareasService) {

  }

  crearTarea() {
    const nuevaTarea: Tarea = {
      nombre: this.nombre,
      fecha: this.fecha
    }
    console.log("Creando tarea:" + this.nombre + " : " + this.fecha);
    this.gestorTareas.agregar(nuevaTarea);

  }

}
