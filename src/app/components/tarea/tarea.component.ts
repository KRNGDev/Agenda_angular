import { Component, Input } from '@angular/core';
import { Tarea } from '../../interface/tarea';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  @Input() tarea: Tarea | any;

}
