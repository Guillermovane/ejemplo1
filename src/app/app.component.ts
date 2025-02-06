import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';

  // Propiedades
  nombre = 'Guillermo Vanegas';
  aniosServicio = 21;
  email = 'guillermovb.ti22@gmail.com';
  activo = true;
  totalAlumnos = 25;
  numeroAleatorio = this.generarNumeroAleatorio();
  contador = 0;
  botonHabilitado = false;

  // Lista de productos
  productos = [
    { id: 1, nombre: 'papas', precio: 24.9 },
    { id: 2, nombre: 'Rancheritos', precio: 26.5 },
    { id: 3, nombre: 'Donas Bimbo', precio: 22.75 }
  ];

  // Función para determinar la antigüedad del maestro
  obtenerAntiguedad() {
    return this.aniosServicio > 10 ? 'Tiene mucha antigüedad' : 'Tiene poca antigüedad';
  }

  // Generar número aleatorio entre 1 y 3
  generarNumeroAleatorio(): string {
    const num = Math.floor(Math.random() * 3) + 1;
    return num === 1 ? 'UNO' : num === 2 ? 'DOS' : 'TRES';
  }

  // Métodos para capturar eventos
  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  habilitarBoton() {
    this.botonHabilitado = !this.botonHabilitado;
  }
}
