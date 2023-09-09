import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { Cita_Admin } from '../../interfaces/cita-adm';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ModalUpdateCitasService } from '../modals/modal-update-citas/modal-update-citas.service';
import { MatPaginator } from '@angular/material/paginator';
import { CitasService } from '../../services/cita.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent {
  formularioAdmCit: FormGroup;
  URL_BASE = 'http://localhost:3000/api/';
  citasList: Cita_Admin[] = [];

  displayedColumns: string[] = ['id_cita','fecha','hora', 'Mascota_id_mascota','Servicio_id_servicio'];
  dataSource!: MatTableDataSource<Cita_Admin>;
  pageSize = 10; // Define el número de elementos por página
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private formBuilder: FormBuilder, private _citasService: CitasService, private http: HttpClient, private modalUpdateCitasService: ModalUpdateCitasService) {
    this.formularioAdmCit = this.formBuilder.group({
      id_cita: [1, Validators.required],
      fecha: [null, Validators.required],
      hora: [null, Validators.required],
      Mascota_id_mascota: [null, Validators.required],
    });
    this.cargarCitas();
  }

  ngOnInit(){
  }

  async cargarCitas() {
    try {
      this.citasList = await this._citasService.getCitas();
      console.log("Lista: ", this.citasList);
      this.dataSource = new MatTableDataSource<Cita_Admin>(this.citasList);
  
      this.dataSource.paginator = this.paginator;
    } catch (error) {
      console.log(error);
    }
  }  

  applyPaginator(event: any) {
    this.pageSize = event.pageSize;
    // Asigna el paginador obtenido a la propiedad paginator del MatTabledataSource
    this.dataSource.paginator = this.paginator;
  }  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  enviarformularioAdmCit() {
    if (this.formularioAdmCit.valid) {
      const url = this.URL_BASE + 'cirugia';
      const formData = this.formularioAdmCit.value;

      this.http.post(url, formData).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

      console.log(this.formularioAdmCit.value);
    }
  }

  modificarCitas(id: number) {
    const dialogRef = this.modalUpdateCitasService.openModal(id);

    dialogRef.afterClosed().subscribe(() => {
      this.cargarCitas();
    });
  }

  eliminarCitas(id: number) {
    console.log(id);
    const url = this.URL_BASE + 'citas/';
    this.http.delete(url + id).subscribe(
      res => {
        alert('Cita eliminada');
        console.log(res);
        this.cargarCitas();
      },
      err => {
        console.log(err);
      }
    );
  }
}