import { Component, OnInit } from '@angular/core';
import { Doctor_Admin } from '../../interfaces/doctor-adm';
import { MatTableDataSource } from '@angular/material/table';
import { DoctoresService } from '../../services/doctor.service';

@Component({
  selector: 'app-listas-registros',
  templateUrl: './listas-registros.component.html',
  styleUrls: ['./listas-registros.component.css']
})
export class ListasRegistrosComponent implements OnInit {
  listDocAdm: Doctor_Admin[] = [];

  displayedColumns: string[] = ['id_doctor', 'nombre', 'apellido', 'telefono', 'direccion', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _doctoresServices: DoctoresService) { }

  ngOnInit() {
    this.cargarDoctores();
  }

  cargarDoctores() {
    this.listDocAdm = this._doctoresServices.getDoctores();
    this.dataSource = new MatTableDataSource(this.listDocAdm);
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
