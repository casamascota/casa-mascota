import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /*
  La url base es la que está en los archivos para las pruebas 
  de las solicitudes: "http://localhost:3000/api" y solo deben concatenar los endpoints
  Ej: http://localhost:3000/api/mascotas o http://localhost:3000/api/mascotas/1
  */

  private URL_BASE = 'localhost:3000/api'; 

  constructor(private http: HttpClient) { }

  getMascotas() {
    return this.http.get<any[]>(`${this.URL_BASE}/mascotas`);//no se exactamente que ruta poner aca 
  }
}
