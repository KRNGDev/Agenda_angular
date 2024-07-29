import { Component } from '@angular/core';
import { GestortareasService } from '../../service/gestortareas.service';
import { CommonModule } from '@angular/common';
import { TareaComponent } from '../tarea/tarea.component';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [CommonModule, TareaComponent],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {
  constructor(public gestorTareas: GestortareasService) {

  }
}
