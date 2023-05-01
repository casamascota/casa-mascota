import { Component } from '@angular/core';

@Component({
  selector: 'app-mascota-formulario',
  templateUrl: './mascota-formulario.component.html',
  styleUrls: ['./mascota-formulario.component.css']
})
export class MascotaFormularioComponent {
  
  id_mascota: number = 0;
  email: string = "";
  mensaje: string = "";

  onSubmit(event: Event) {
    event.preventDefault();
    console.log("id_mascota: " + this.id_mascota);
    console.log("Email: " + this.email);
    console.log("Mensaje: " + this.mensaje);

  }
  
}
