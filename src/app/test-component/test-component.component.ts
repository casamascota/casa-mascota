import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {
  mascotaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.mascotaForm = this.formBuilder.group({
      id_mascota: [null, Validators.required],
      nombre: [null, Validators.required],
      tipo: [null, Validators.required],
      raza: [null, Validators.required],
      edad: [null, Validators.required],
      sexo: [null, Validators.required],
      fecha_nacimiento: [null, Validators.required],
      peso: [null, Validators.required],
      id_owner: [null, Validators.required]
    });
  }

  onSubmit() {
    if(this.mascotaForm.valid){
      console.log(this.mascotaForm.value);
    }
    else{
      console.log("Formulario invalido");
    }
  }

}
