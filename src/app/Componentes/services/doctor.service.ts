import { Injectable } from "@angular/core";
import { Doctor_Admin } from "../interfaces/doctor-adm";
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DoctoresService {
    URL_BASE = 'http://localhost:3000/api/';

    //listDocAdm: Doctor_Admin[] = [];

    listDoctor: Doctor_Admin[] = [];

    constructor(private httpClient: HttpClient) { 
        this.getDoctores();
    }

    getDoctores() {
        const url = this.URL_BASE + 'doctores';
     this.httpClient.get(url).subscribe(
      (res: any) => {
        console.log("Servicio" + res);
        this.listDoctor = res; // Asignar las mascotas recuperadas a la variable mascotas
      },
      err => {
        console.log(err);
      }
    );
    return this.listDoctor;
  }
}
