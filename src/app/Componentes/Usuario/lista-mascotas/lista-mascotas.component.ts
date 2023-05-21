import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent {
  URL_BASE = 'http://localhost:3000/api/';
  mascotas: any[] = [];

  constructor(private httpClient: HttpClient) {
  this.getAllMascotas();
  }
 

  getAllMascotas() {
    this.httpClient.get(this.URL_BASE + 'mascotas').subscribe(
       (res: any) => {
          this.mascotas = res;
          console.log(this.mascotas);
       },
       err => {
          console.log(err);
       }
    );
 }

 
}
