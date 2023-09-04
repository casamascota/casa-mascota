import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DetallesCirugiaComponent } from '../../Usuario/detalles-cirugia/detalles-cirugia.component';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cirugias',
  templateUrl: './lista-cirugias.component.html',
  styleUrls: ['./lista-cirugias.component.css']
})
export class ListaCirugiasComponent implements OnInit {
  URL_BASE = 'http://localhost:3000/api/';
  cirugiasList: any[] = [];

  constructor(private httpClient: HttpClient, private dialog: MatDialog) {
    this.getListaFormateada();
    console.log(this.cirugiasList);
  }

  ngOnInit(): void {
    
  }

  getAllCirugias() {
    this.httpClient.get(this.URL_BASE + 'cirugias').subscribe(
      (res: any) => {
        this.cirugiasList = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  _getCirugias(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL_BASE + 'cirugias');
  }

  abrirDetalleCirugia(cirugia: any) {
    const dialogRef = this.dialog.open(DetallesCirugiaComponent, {
      width: '600px',
      data: cirugia
    });
  }

  _getDoctor(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL_BASE + 'doctores');
  }

  _getEnfermero(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL_BASE + 'enfermeros');
  }

  _getDiagnostico(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL_BASE + 'diagnosticos');
  }

  getListaFormateada() {
    this._getCirugias().subscribe(
      (res) => {
        const auxLista = res;
        this.cirugiasList = res;

        for (let i = 0; i < auxLista.length; i++) {
          this.getDoctorById(auxLista[i].Doctor_id_doctor).subscribe(
            (res) => {
              auxLista[i].Doctor_id_doctor = res.nombre + ' ' + res.apellido;
              this.cirugiasList = auxLista;
            },
            (error) => {
              console.log(error);
            }
          );

          this.getEnfermeroById(auxLista[i].Enfermero_id_enfermero).subscribe(
            (res) => {
              auxLista[i].Enfermero_id_enfermero = res.nombre + ' ' + res.apellidos;
              this.cirugiasList = auxLista;
            },
            (error) => {
              console.log(error);
            }
          );
//Quiza aqui añadir mas detalles a tratamiento porque solo dara como resultado el campo "diagnostico VARCHAR(100)"
          this.getDiagnosticoById(auxLista[i].Diagnostico_id_diagnostico).subscribe(
            (res) => {
              auxLista[i].Diagnostico_id_diagnostico = res.diagnostico;
              this.cirugiasList = auxLista;
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCirugia(id_cirugia: number): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}cirugias/${id_cirugia}`);
  }

  getDoctorById(id_doctor: number): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}doctores/${id_doctor}`);
  }

  getEnfermeroById(id_enfermero: number): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}enfermeros/${id_enfermero}`);
  }

  getDiagnosticoById(id_diagnostico: number): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}diagnosticos/${id_diagnostico}`);
  }
}
