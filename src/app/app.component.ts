import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./components/cabecera/cabecera.component"
import { ContenedorComponent } from "./components/contenedor/contenedor.component"
import { FooterComponent } from "./components/footer/footer.component"


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ContenedorComponent, CabeceraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto Agenda';
}
