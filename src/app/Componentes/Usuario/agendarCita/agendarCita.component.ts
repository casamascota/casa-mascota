import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agendarCita',
  templateUrl: './agendarCita.component.html',
  styleUrls: ['./agendarCita.component.css']
})
export class AgendarCitaComponent implements OnInit {
  citaFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.citaFormulario = this.formBuilder.group({
      fecha: ['', Validators.required],
    })
  }

  solicitarCita() {

  }
  ngOnInit() {
  }

}
