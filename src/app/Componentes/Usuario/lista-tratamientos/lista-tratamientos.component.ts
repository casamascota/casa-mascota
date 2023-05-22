import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DetallesMascotaComponent } from '../detalles-mascota/detalles-mascota.component';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DetalleTratamientoComponent } from '../detalle-tratamiento/detalle-tratamiento.component';

@Component({
  selector: 'app-lista-tratamientos',
  templateUrl: './lista-tratamientos.component.html',
  styleUrls: ['./lista-tratamientos.component.css']
})
export class ListaTratamientosComponent implements OnInit {
  URL_BASE = 'http://localhost:3000/api/';
  tratamientosList: any[] = [];

  constructor(private httpClient: HttpClient,private dialog: MatDialog) {
  this.getListaFormateada();
  }
  ngOnInit(): void {
    
  }

  getAllTratamientos() {
      this.httpClient.get(this.URL_BASE + 'tratamientos').subscribe(
         (res: any) => {
         this.tratamientosList = res;
         //console.log(this.mascotasList);
      },
      err => {
         console.log(err);
         }
      );
   }

  _getTratamientos(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL_BASE + 'tratamientos');
  }

   abrirDetalleTratamiento(tratamiento: any) {
      const dialogRef = this.dialog.open(DetalleTratamientoComponent, {
         width: '600px',
         data: tratamiento
       });
      }


  _getDiagnosticos(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL_BASE + 'diagnosticos');
  }

  getListaFormateada() {
    this._getTratamientos().subscribe(
      (res) => {
        const auxLista = res;
        this.tratamientosList = res;

        for (let i = 0; i < auxLista.length; i++) {
          this.getOwnerById(auxLista[i].Owner_id_owner).subscribe(
            (res) => {
              auxLista[i].Owner_id_owner = res.nombre + " " + res.apellido;
              console.log(auxLista[i].Owner_id_owner);
              this.tratamientosList = auxLista;
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

  getTratamiento(idTratamiento: number): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}tratamientos/${idTratamiento}`);
  }

  getOwnerById(idDiagnostico: number): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}diagnosticos/${idDiagnostico}`);
  }
}
