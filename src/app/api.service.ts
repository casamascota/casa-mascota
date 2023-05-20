import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = '../backend'; 

  constructor(private http: HttpClient) { }

  getMascotas() {
    return this.http.get<any[]>(`${this.baseUrl}/api/v1/`);//no se exactamente que ruta poner aca 
  }
}
