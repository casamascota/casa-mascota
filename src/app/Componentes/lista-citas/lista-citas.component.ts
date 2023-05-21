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

    constructor(private httpClient: HttpClient) { }
  
    ngOnInit(): void {
      this.getCitasAgendadas();
      
    }

    getCitasAgendadas() {
      this.httpClient.get<any[]>(this.URL_BASE + 'citas').subscribe(
        (res) => {
          this.citasList = res;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  
}
