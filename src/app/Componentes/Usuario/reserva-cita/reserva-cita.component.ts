import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-cita',
  templateUrl: './reserva-cita.component.html',
  styleUrls: ['./reserva-cita.component.css']
})
export class ReservaCitaComponent {
  reservaForm: FormGroup;
  Servicio_id_servicio: any = ['Veterinario', 'Estilista'];
  URL_BASE = 'http://localhost:3000/api/';

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder ) { 
    this.reservaForm = this.formBuilder.group({
      fecha: [null, Validators.required],
      hora: [null, Validators.required],
      Servicio_id_servicio: ['',Validators.required],
      Mascota_id_mascota : [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.reservaForm.value);
    this.guardarCita();
  }

  guardarCita() {
    if (this.reservaForm.valid) {
      const url = this.URL_BASE + 'citas';
      const formData = this.reservaForm.value;

      this.httpClient.post(url, formData).subscribe(
        res => {
          console.log(res);
          alert('Cita guardada con exito');
        },
        err => {
          console.log(err);
        }
      )
      
      console.log(this.reservaForm.value);
    }
    
  }



  
}
