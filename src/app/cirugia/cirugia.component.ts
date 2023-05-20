import { Component } from '@angular/core';

export interface Cirugia {
  id_cirugia: number;
  fecha: string;
  cirugiahecha: boolean;
  doctor_id: number;
  enfermero_id: number;
}

@Component({
  selector: 'app-cirugia',
  templateUrl: './cirugia.component.html',
  styleUrls: ['./cirugia.component.css']
})
export class CirugiaComponent {
  cirugia: Cirugia = {
    id_cirugia: 0,
    fecha: '',
    cirugiahecha: false,
    doctor_id: 0,
    enfermero_id: 0
  };

  cirugias: Cirugia[] = [];

  guardarCirugia() {
    // Validar que se haya completado el formulario
    if (this.cirugia.id_cirugia && this.cirugia.fecha && this.cirugia.doctor_id && this.cirugia.enfermero_id) {
      // Guardar la cirugía en la matriz de cirugías
      this.cirugias.push({ ...this.cirugia });
      // Reiniciar el formulario
      this.cirugia = {
        id_cirugia: 0,
        fecha: '',
        cirugiahecha: false,
        doctor_id: 0,
        enfermero_id: 0
      };
    } else {
      alert('Por favor, complete todos los campos del formulario.');
    }
  }

  editarCirugia(cirugia: Cirugia) {
    // Asignar la cirugía seleccionada al formulario para su edición
    this.cirugia = { ...cirugia };
  }

  eliminarCirugia(cirugia: Cirugia) {
    // Eliminar la cirugía de la matriz de cirugías
    const index = this.cirugias.indexOf(cirugia);
    if (index !== -1) {
      this.cirugias.splice(index, 1);
    }
  }
}


