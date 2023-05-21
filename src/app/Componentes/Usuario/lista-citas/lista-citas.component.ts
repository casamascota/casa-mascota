import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent {
  URL_BASE = 'http://localhost:3000/api/';
  citasList: any[] = [];
  //listaAux: any[] = [];
    constructor(private httpClient: HttpClient) { }
  
    ngOnInit(): void {
      this.getCitasAgendadas();
      
    }
    getCitasAgendadas_():Observable<any> {
      return this.httpClient.get<any[]>(this.URL_BASE + 'citas');
    }

    getCitasAgendadas() {
      this.getCitasAgendadas_().subscribe(
        (res) => {
          const auxLista = res;

          this.citasList = res;
          for(let i = 0; i < auxLista.length; i++){
            const nombre = this.getMascota(auxLista[i].Mascota_id_mascota).subscribe
            ((res) => {
              auxLista[i].Mascota_id_mascota = res.nombre;
            },
            (error) => {
              console.log(error);
            });
           
          }
          for(let i = 0; i < auxLista.length; i++){
            const nombre = this.getServicio(auxLista[i].Servicio_id_servicio).subscribe
            ((res) => {
              auxLista[i].Servicio_id_servicio = res.tipo;
            },
            (error) => {
              console.log(error);
            });

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

    getServicio(idServicio: number): Observable<any> {
      return this.httpClient.get(`${this.URL_BASE}servicios/${idServicio}`);
    }
    

   

    
  
}
