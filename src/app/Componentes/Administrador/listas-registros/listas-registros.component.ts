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
  selectedForm: string;
  URL_BASE = 'http://localhost:3000/api/';
  listDoctores: Doctor_Admin[] = [];

  displayedColumns: string[] = ['id_doctor', 'nombre', 'apellido', 'numero_tel', 'direccion', 'acciones'];
  dataSource!: MatTableDataSource<Doctor_Admin>;

  constructor(private _doctoresServices: DoctoresService) {
    this.selectedForm = 'doctor/admin';
    this.cargarDoctores();
   }

  ngOnInit() {
  }

  async cargarDoctores() {
    try {
      this.listDoctores = await this._doctoresServices.getDoctores();
      console.log("Lista: ", this.listDoctores);
      this.dataSource = new MatTableDataSource<Doctor_Admin>(this.listDoctores);
    } catch (error) {
      console.log(error);
    }
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
