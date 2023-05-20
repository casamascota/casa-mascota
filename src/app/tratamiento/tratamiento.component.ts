import { Component } from '@angular/core';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.css']
})
export class TratamientoComponent {
  nuevoTratamiento = {
    nombre: '',
    tipo: '',
    descripcion: ''
  };

  guardarTratamiento() {
    // Aquí puedes agregar la lógica para guardar el tratamiento o cirugía en la base de datos
    // utilizando un servicio o una API
    console.log('Guardar:', this.nuevoTratamiento);
    // Reiniciar el formulario
    this.nuevoTratamiento = {
      nombre: '',
      tipo: '',
      descripcion: ''
    };
  }
}
