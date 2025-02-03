import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';
  //propiedades
  nombre ='Guillermo';
  aniosServicio =3;
  email='guillermovb71@mail.com';
  activo=false;
  alumnos = [25,24,26];
  //funcion que muestra si esta activo o no 
  esActivo(){
    if(this.activo){
      return"Empleado activo";
    } else{
      return"Empleado Inactivo";
    }
  }
}
