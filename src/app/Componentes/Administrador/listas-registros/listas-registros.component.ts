import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  formularioAdmDoc: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';
  listDoctores: Doctor_Admin[] = [];

  displayedColumns: string[] = ['id_doctor', 'nombre', 'apellido', 'numero_tel', 'direccion', 'acciones'];
  dataSource!: MatTableDataSource<Doctor_Admin>;

  constructor(private formBuilder: FormBuilder, private _doctoresServices: DoctoresService, private http: HttpClient) {
    this.formularioAdmDoc = this.formBuilder.group({
      id_doctor: [1, Validators.required],
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      numero_tel: [null, Validators.required],
      direccion: [null, Validators.required],
    });
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

  enviarFormularioAdmDoc() {
    if (this.formularioAdmDoc.valid) {
      const url = this.URL_BASE + 'doctores';
      const formData = this.formularioAdmDoc.value;

      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )

      console.log(this.formularioAdmDoc.value);

    }
  }
}
