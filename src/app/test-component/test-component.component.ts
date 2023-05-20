import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {
  mascotaForm: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.mascotaForm = this.formBuilder.group({
      id_mascota: [null, Validators.required],
      nombre: [null, Validators.required],
      tipo: [null, Validators.required],
      raza: [null, Validators.required],
      edad: [null, Validators.required],
      genero: [null, Validators.required],
      fechaNac: [null, Validators.required],
      peso: [null, Validators.required],
      idOwner: [null, Validators.required]
    });
  }

  onSubmit() {
    if(this.mascotaForm.valid){
      const url = this.URL_BASE + 'mascotas';
      const formData = this.mascotaForm.value;
      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
      console.log(this.mascotaForm.value);
    }
    else{
      console.log("Formulario invalido");
    }
  }

}
