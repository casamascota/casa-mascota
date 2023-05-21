import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})

export class AgregarRegistroComponent {
  selectedForm: string;
  formularioAdmDoc: FormGroup;
  formularioEnfermero: FormGroup;
  formularioOwner: FormGroup;
  formularioMascota: FormGroup;
  formularioEstilista: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.formularioAdmDoc = this.formBuilder.group({
      id_doctor: [null, Validators.required],
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      numero_tel: [null, Validators.required],
      direccion: [null, Validators.required],
    });
    this.formularioEnfermero = this.formBuilder.group({
      id_enfermero: [null, Validators.required],
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      telefono: [null, Validators.required],
      direccion: [null, Validators.required],
    });
    this.formularioOwner = this.formBuilder.group({
      id_owner: [null, Validators.required],
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      telefono: [null, Validators.required],
      direccion: [null, Validators.required]
    });
    this.formularioMascota = this.formBuilder.group({
      id_mascota: [null, Validators.required],
      nombre: [null, Validators.required],
      raza: [null, Validators.required],
      edad: [null, Validators.required],
      genero: [null, Validators.required],
      fechaNacimiento: [null, Validators.required],
      peso: [null, Validators.required],
      especie: [null, Validators.required],
    });
    this.formularioEstilista = this.formBuilder.group({
      id_estilista: [null, Validators.required],
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      telefono: [null, Validators.required],
      direccion: [null, Validators.required],
    });

    this.selectedForm = 'doctor/admin';
  }
  
  enviarFormularioAdmDoc() {
    if (this.formularioAdmDoc.valid) {
      const url = this.URL_BASE + 'doctores';
      const formData = this.formularioAdmDoc.value;

      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )

      console.log(this.formularioAdmDoc.value);

    }
  }
  
  enviarFormularioEnfermero() {
    if (this.formularioEnfermero.valid) {
      console.log("Enfermero: ");
      console.log(this.formularioEnfermero.value);
    }
  }

  enviarFormularioOwner() {
    if (this.formularioOwner.valid) {
      console.log("Owner: ");
      console.log(this.formularioOwner.value);
      
    }
  }

  enviarFormularioMascota() {
    if (this.formularioMascota.valid) {
      console.log("Mascota: ");
      console.log(this.formularioMascota.value);
    }
  }

  enviarFormularioEstilista() {
    if (this.formularioEstilista.valid) {
      console.log ("Estilista: ");
      console.log(this.formularioEstilista.value);
    }
  }
}
