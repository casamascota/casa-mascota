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
          //console.log(auxLista);
          for(let i = 0; i < auxLista.length; i++){
            const nombre = this.getMascota(auxLista[i].Mascota_id_mascota).subscribe
            ((res) => {
              console.log(res);
              auxLista[i].Mascota_id_mascota = res.nombre;
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


    /*getCitasAgendadas() {
      this.httpClient.get<any[]>(this.URL_BASE + 'citas').subscribe(
        (res) => {
          this.listaAux = res;  
          this.citasList = res;
          console.log(this.listaAux);
        },
        (error) => {
          console.log(error);
        }
      );
      this.getMascotas_();

     
    }*/

    getMascota(idMascota: number): Observable<any> {
      return this.httpClient.get(`${this.URL_BASE}mascotas/${idMascota}`);
    }
    

    // getMascota(idMascota: number) {
    //   let mascota;
    //   this.httpClient.get(`${this.URL_BASE}mascotas/${idMascota}`).subscribe(
    //     (res) => {
    //       mascota = res;
    //       console.log(mascota);
    //       return res;
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
      
    // }

    
  
}
