import { Component, OnInit } from '@angular/core';
import { Doctor_Admin } from '../../interfaces/doctor-adm';
import { MatTableDataSource } from '@angular/material/table';
import { DoctoresService } from '../../services/doctor.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listas-registros',
  templateUrl: './listas-registros.component.html',
  styleUrls: ['./listas-registros.component.css']
})
export class ListasRegistrosComponent implements OnInit {
  URL_BASE = 'http://localhost:3000/api/';
  listDoctores: Doctor_Admin [] = [];

  displayedColumns: string[] = ['id_doctor', 'nombre', 'apellido', 'telefono', 'direccion', 'acciones'];
  dataSource!: MatTableDataSource<Doctor_Admin>;

  constructor(private _doctoresServices: DoctoresService) {
    this.cargarDoctores();
   }

  ngOnInit() {
    this.cargarDoctores();
  }

  cargarDoctores() {
    /*const url = this.URL_BASE + 'doctores';
    this.http.get(url).subscribe(
      (res: any) => {
        console.log(res);
        this.listDoctores = res; // Asignar las mascotas recuperadas a la variable mascotas
      },
      err => {
        console.log(err);
      }
    );*/
    this.listDoctores = this._doctoresServices.getDoctores();
    console.log("Lista" + this.listDoctores);
  
    this.dataSource = new MatTableDataSource(this.listDoctores);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarDoc(id: number) {
    console.log(id);
    this.cargarDoctores();
  }

}
