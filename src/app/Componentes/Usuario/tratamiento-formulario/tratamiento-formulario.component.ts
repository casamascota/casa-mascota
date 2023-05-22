import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tratamiento-formulario',
  templateUrl: './tratamiento-formulario.component.html',
  styleUrls: ['./tratamiento-formulario.component.css']
})
export class TratamientoFormularioComponent {
  formTratamiento: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder ) { 
    this.formTratamiento = this.formBuilder.group({
      id_trat: ['',Validators.required],
      fecha_inicio: ['',Validators.required],
      fecha_final: ['',Validators.required],
      id_diagnostico: ['',Validators.required]
     
    });
  }

  onSubmit() {
    console.log(this.formTratamiento.value);
    this.guardarTratamiento();
  }

  guardarTratamiento() {
    this.httpClient.post(this.URL_BASE + 'tratamientos', this.formTratamiento.value).subscribe(
      (response: any) => {
        console.log(response);
        alert('Tratamiento guardado con exito');
      },
      (error) => console.log(error)
    );
  }



  
}
