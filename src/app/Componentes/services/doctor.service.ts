import { Injectable } from "@angular/core";
import { Doctor_Admin } from "../interfaces/doctor-adm";

@Injectable({
    providedIn: 'root'
})

export class DoctoresService {
    
    listDocAdm: Doctor_Admin[] = [
        {id_doctor: 1, nombre: 'Doc', apellido: 'Tor', telefono: 911, direccion: 'Cruz Roja'},
        {id_doctor: 2, nombre: 'Doc', apellido: 'Tor', telefono: 911, direccion: 'Cruz Roja'},
    ];

    constructor() { }

    getDoctores() {
        return this.listDocAdm.slice();
    }
}