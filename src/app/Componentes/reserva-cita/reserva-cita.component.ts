import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-cita',
  templateUrl: './reserva-cita.component.html',
  styleUrls: ['./reserva-cita.component.css']
})
export class ReservaCitaComponent {
  URL_BASE = 'http://localhost:3000/api/';
  serviciosList : any = [];
  reservaForm : FormGroup;
  idServicio : number = 0;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.reservaForm = this.formBuilder.group({
      id_cita: [null, Validators.required],
      fecha: [null, Validators.required],
      hora : [null, Validators.required],
      id_servicio : [null, Validators.required],
      id_mascota : [null, Validators.required]
    });
  
   }
   
  onSubmit() {
    if (this.reservaForm.valid) {
      // Realizar la lógica de envío de la reserva
      this.http.post<any[]>(this.URL_BASE + 'citas', {
        id_cita: this.reservaForm.value.id_cita,
        fecha: this.reservaForm.value.fecha,
        hora: this.reservaForm.value.hora,
        Mascota_id_mascota: this.reservaForm.value.id_mascota,
        Servicio_id_servicio: this.reservaForm.value.id_servicio

      }).subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
        
    } else {
      console.log("Formulario inválido");
      console.log(this.reservaForm.value);
    }
  }

  getServicios() {
    this.http.get<any[]>(this.URL_BASE + 'servicios').subscribe(
      (res) => {
        this.serviciosList = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  

  ngOnInit(): void {
    this.getServicios();
  }
  

}
