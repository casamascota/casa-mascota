import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent {
  URL_BASE = 'http://localhost:3000/api/';
  citasList: any[] = [];
  listaAux: any[] = [];
    constructor(private httpClient: HttpClient) { }
  
    ngOnInit(): void {
      this.getCitasAgendadas();
      
    }

    getCitasAgendadas() {
      this.httpClient.get<any[]>(this.URL_BASE + 'citas').subscribe(
        (res) => {
          this.listaAux = res;
          this.listaAux.forEach(element => {
            let mascota = this.getMascota(element.Mascota_id_mascota);
            element.mascota = mascota;
          });
        
        },
        (error) => {
          console.log(error);
        }
      );
    }

    getMascota(idMascota: number) {
      let mascota = this.httpClient.get<any[]>(this.URL_BASE + 'mascotas/' + idMascota).subscribe(
        (res) => {
          return res;
        },
        (error) => {
          console.log(error);
        }
      );
      return mascota;
    }
  
}
