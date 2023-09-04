import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mascota-formulario',
  templateUrl: './mascota-formulario.component.html',
  styleUrls: ['./mascota-formulario.component.css']
})
export class MascotaFormularioComponent {
  formMascota: FormGroup;
  genero: any = ['Macho', 'Hembra'];
  URL_BASE = 'http://localhost:3000/api/';
  // id_mascota: number = 0;
  // email: string = "";
  // mensaje: string = "";

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder ) { 
    this.formMascota = this.formBuilder.group({
      nombre: ['',Validators.required],
      raza: ['',Validators.required],
      edad: ['',Validators.required], 
      genero : ['',Validators.required],
      fecha_nacimiento: ['',Validators.required],
      peso: ['',Validators.required],
      isAdopted: [0,Validators.required],
      Owner_id_owner: ['',Validators.required],
    });
  }

  onSubmit() {
    console.log(this.formMascota.value);
    this.guardarMascota();
  }

  guardarMascota() {
    if (this.formMascota.valid) {
      const url = this.URL_BASE + 'mascotas';
      const formData = this.formMascota.value;

      this.httpClient.post(url, formData).subscribe(
        res => {
          console.log(res);
          alert('Mascota guardada con exito');
        },
        err => {
          console.log(err);
        }
      )
      
      console.log(this.formMascota.value);
    }
    
  }



  
}
