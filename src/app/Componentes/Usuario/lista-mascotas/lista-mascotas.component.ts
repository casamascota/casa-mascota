import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {
  URL_BASE = 'http://localhost:3000/api/';
  mascotasList: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getOwner();
  }

  _getOwner(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL_BASE + 'owner');
  }

  getOwner() {
    this._getOwner().subscribe(
      (res) => {
        const auxLista = res;
        this.mascotasList = res;

        for (let i = 0; i < auxLista.length; i++) {
          this.getMascota(auxLista[i].Mascota_id_mascota).subscribe(
            (res) => {
              auxLista[i].Mascota_id_mascota = res.nombre;
            },
            (error) => {
              console.log(error);
            }
          );
        }

        for (let i = 0; i < auxLista.length; i++) {
          this.getOwnerById(auxLista[i].Owner_id_owner).subscribe(
            (res) => {
              auxLista[i].Owner_id_owner = res.nombre;
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

  getMascota(idMascota: number): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}mascotas/${idMascota}`);
  }

  getOwnerById(idOwner: number): Observable<any> {
    return this.httpClient.get(`${this.URL_BASE}owner/${idOwner}`);
  }
}
