import { Component } from '@angular/core';

@Component({
  selector: 'app-mascota-formulario',
  templateUrl: './mascota-formulario.component.html',
  styleUrls: ['./mascota-formulario.component.css']
})
export class MascotaFormularioComponent {
  onSubmit() {
    console.log('Formulario enviado');
  }
}

