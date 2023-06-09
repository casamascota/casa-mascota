import { Injectable } from "@angular/core";
import { Doctor_Admin } from "../interfaces/doctor-adm";
import { HttpClient } from "@angular/common/http";

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
        console.log(res);
        this.listDoctor = res; 
      },
      err => {
        console.log(err);
      }
    );
    return this.listDoctor;
  }
}
